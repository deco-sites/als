import { context, live } from "$live/live.ts";
import LiveSections from "$live/components/LiveSections.tsx";
import { PageProps } from "$fresh/server.ts";
import { LivePageData } from "$live/types.ts";
import Jitsu from "partytown/integrations/Jitsu.tsx";
// import LivePage from "$live/components/LivePage.tsx";

export const handler = live();

export default function LivePage({ data }: PageProps<LivePageData>) {
  return (
    <>
      {(context.isDeploy) &&
        (
          <Jitsu
            data-init-only="true"
            data-key="js.9wshjdbktbdeqmh282l0th.c354uin379su270joldy2"
          />
        )}
      {!!data && <LiveSections {...data.page.data} />}
    </>
  );
}
