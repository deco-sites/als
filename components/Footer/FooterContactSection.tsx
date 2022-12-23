import links from "../../data/links.ts";

export default function FooterContactSection() {
  return (
    <section class="flex flex-col gap-4 py-4 items-center md:items-start border-b border-[rgba(255,255,255,0.2)] md:border-0">
      <div class="flex flex-row justify-center items-center md:justify-start gap-8 md:gap-3">
        <a
          href=""
          title="Store Locations"
          class="flex w-10 h-10 justify-center items-center"
        >
          <img
            alt="Store Locations"
            crossOrigin="anonymous"
            data-src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/f285fa14-4aa1-43ed-8047-9f2b92d001f6___b7fe3b9c1e0023323621a294c3bcfeef.svg"
            src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/f285fa14-4aa1-43ed-8047-9f2b92d001f6___b7fe3b9c1e0023323621a294c3bcfeef.svg"
            loading="lazy"
            width={30}
            height={30}
            class="h-8"
          />
        </a>
        <a
          href={links.tel}
          title="Call Us"
          class="flex w-10 h-10 justify-center items-center"
        >
          <img
            alt="Call Us"
            crossOrigin="anonymous"
            data-src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/11a29410-46bf-4a63-90ee-73f52285fc31___1b935ef5a03bd6c6ee0e7fe7a1b539b5.svg"
            src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/11a29410-46bf-4a63-90ee-73f52285fc31___1b935ef5a03bd6c6ee0e7fe7a1b539b5.svg"
            loading="lazy"
            width={30}
            height={30}
          />
        </a>
        <a
          href={links.mailto}
          title="Email Us"
          class="flex w-10 h-10 justify-center items-center"
        >
          <img
            alt="Email Us"
            crossOrigin="anonymous"
            data-src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/a0f302c4-94c3-462c-aab7-cbbf60bf7157___1f71b308d4bfe4d7975e6c45bfd923cf.svg"
            src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/a0f302c4-94c3-462c-aab7-cbbf60bf7157___1f71b308d4bfe4d7975e6c45bfd923cf.svg"
            loading="lazy"
            width={30}
            height={30}
          />
        </a>
      </div>
    </section>
  );
}
