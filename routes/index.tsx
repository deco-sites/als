import { context, live } from "$live/live.ts";
import LiveSections from "$live/components/LiveSections.tsx";
import { PageProps } from "$fresh/server.ts";
import { LivePageData } from "$live/types.ts";
import Jitsu from "partytown/integrations/Jitsu.tsx";
import Script from "partytown/Script.tsx";
// import LivePage from "$live/components/LivePage.tsx";

import type { Flags, Page } from "$live/types.ts";
import { Head } from "$fresh/runtime.ts";

const innerHtml = (
  { id, path, flags = {} }: Partial<Page> & { flags?: Flags },
) => `
const onWebVitalsReport = (event) => {
  setTimeout(() => window.jitsu('track', 'web-vitals', event), 0);
};

/* Send exception error to jitsu */
const onError = ( message, url, lineNo, columnNo, error) => {
  window.jitsu('track', 'error', {error_1type: "Exception",message, url,  lineNo, columnNo, error_stack: error.stack, error_name: error.name})
}

const init = async () => {
  if (typeof window.jitsu !== "function") {
    return;
  }

  /* Send scriptLoad event to jitsu */
  window.__decoLoadingErrors.forEach((e) => window.jitsu('track', 'error',{error_type:"ScriptLoad", url: e.src}))

  /* Add these trackers to all analytics sent to our server */
  setTimeout(() =>  window.jitsu('set', { page_id: "${id}", page_path: "${path}", site_id: "${context.siteId}", ${
  Object.keys(flags).map((key) => `flag_${key}: true`).join(",")
} }), 0);
  /* Send page-view event */
  setTimeout(() => window.jitsu('track', 'pageview'), 0);

  /* Listen web-vitals */
  const { onCLS, onFID, onLCP } = await import("https://esm.sh/stable/web-vitals@3.1.0/es2022/web-vitals.js");

  setTimeout(() => onCLS(onWebVitalsReport), 0);
  setTimeout(() => onFID(onWebVitalsReport), 0);
  setTimeout(() => onLCP(onWebVitalsReport), 0);
};
  /* Send exception error event to jitsu */
  window.addEventListener('error', function ({message, url, lineNo, columnNo, error}) {
    onError(message, url, lineNo, columnNo, error)})

  if (document.readyState === 'complete') {
      init();
  } else {
      window.addEventListener('load', init);
};
`;

type Props = Partial<Page> & { flags?: Flags };

// Get all the scripts and check which ones have errors
const errorHandlingScript = `
window.__decoLoadingErrors = []
const scripts = document.querySelectorAll("script");
scripts.forEach((e) => {e.onerror = () => __decoLoadingErrors.push(e.src) })
`;

export const handler = live();

export default function LivePage({ data }: PageProps<LivePageData>) {
  return (
    <>
      <Jitsu
        data-init-only="true"
        data-key="js.9wshjdbktbdeqmh282l0th.c354uin379su270joldy2"
      />

      {/* All these scripts bellow */}
      {/* TODO: Ensure this still working  */}
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: errorHandlingScript,
          }}
        />
      </Head>
      <Script
        defer
        type="module"
        dangerouslySetInnerHTML={{
          __html: innerHtml({
            id: data.page.id,
            path: data.page.path,
            flags: data.flags,
          }),
        }}
      />
      {!!data && <LiveSections {...data.page.data} />}
    </>
  );
}
