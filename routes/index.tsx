import { live } from "$live/live.ts";
// import LiveSections from "$live/components/LiveSections.tsx";
// import { PageProps } from "$fresh/server.ts";
// import { LivePageData } from "$live/types.ts";
import LivePage from "$live/components/LivePage.tsx";

export const handler = live();

export default LivePage;
