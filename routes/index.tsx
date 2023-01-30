import { live } from "$live/live.ts";
import LiveSections from "$live/components/LiveSections.tsx";
import { PageProps } from "$fresh/server.ts";
import { LivePageData } from "$live/types.ts";

export const handler = live();

export default function LivePage(
  { data }: PageProps<LivePageData | undefined>,
) {
  return (
    <>
      {!!data && <LiveSections {...data.page.data} />}
    </>
  );
}
