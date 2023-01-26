import Image from "$live/std/ui/components/Image.tsx";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Banner {
  src: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export interface Props {
  images: Banner[];
  title: string;
}

export default function BannerGrid({
  images = [],
  title,
}: Props) {
  return (
    <section class="max-w-[1400px] w-full px-4 md:px-0 mx-auto lg:my-12">
      <div class="pb-8 lg:pb-12 mt-8 flex items-center w-full max-w-[96rem]">
        <h2 class="text-5xl font-semibold text-center w-full text-gray">
          {title}
        </h2>
      </div>
      <div class="flex flex-wrap justify-center items-stretch gap-6 lg:gap-14 w-full max-w-[96rem]">
        {images.map(({ href, src, alt }) => (
          <a
            href={href}
            title={alt}
            class="w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-2xl hover:scale-105 scale-100 transition hover:duration-500 duration-500"
            style={{ boxShadow: "0 0 7px 2px rgb(0 0 0 / 20%)" }}
          >
            <Picture>
              <Source
                media="(max-width: 767px)"
                src={src}
                height={150}
                width={150}
              />
              <Source
                media="(min-width: 768px)"
                src={src}
                height={250}
                width={250}
              />
              <img
                src={src}
                alt={alt}
                class="w-full rounded-2xl"
                loading="lazy"
                decoding="async"
              />
            </Picture>
          </a>
        ))}
      </div>
    </section>
  );
}
