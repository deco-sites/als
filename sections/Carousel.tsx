import { useId } from "preact/hooks";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Slider from "../islands/Slider.tsx";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";

export interface Props {
  images: Array<{
    /** @title Image Mobile */
    mobile: LiveImage;
    /** @title Image Desktop */
    desktop: LiveImage;
    /** @title Brand Image */
    brand: LiveImage;
    /** @title Title */
    title: string;
    /** @title Subtitle */
    subtitle: string;
    /** @title Button Label */
    button: string;
    /** @title Button Link */
    link: string;
  }>;
  /**
   * @title delay
   * @description Time to switch slides in seconds
   * @default 3
   */
  delay?: number;
}

function Carousel({ images = [], delay = 3 }: Props) {
  const id = useId();

  return (
    <>
      <div id={id} class="relative w-full overflow-hidden">
        <div
          data-slider-content
          class={`flex transition w-[${images.length * 100}%]`}
        >
          {images.map((
            { mobile, desktop, brand, title, subtitle, button, link },
            index,
          ) => (
            <div class="h-[600px] md:min-h-[780px] w-full relative">
              <Picture preload={index === 0}>
                <Source
                  src={mobile}
                  media="(max-width: 767px)"
                  width={360}
                  height={600}
                />
                <Source
                  src={desktop}
                  media="(min-width: 768px)"
                  width={1024}
                  height={780}
                />
                <img
                  src={desktop}
                  alt={title}
                  class="object-cover object-center w-full h-full"
                  loading={index === 0 ? "eager" : undefined}
                  decoding={index === 0 ? "auto" : "async"}
                />
              </Picture>
              <div
                class="w-full h-1/2 md:w-[420px] md:h-[270px] py-4 absolute bottom-0 md:bottom-[25%] left-0 md:left-[15%] bg-[rgba(0,0,0,0.7)] text-white flex flex-col justify-center items-center md:items-start md:rounded-xl md:px-6 md:py-4"
                style={{ backdropFilter: "blur(6px)" }}
              >
                <img
                  src={brand}
                  class="h-1/4 my-1"
                  alt={title}
                  width="100%"
                  height="100%"
                />
                <h3 class="text-3xl font-semibold my-2">{title}</h3>
                <p class="my-2">{subtitle}</p>
                <a
                  href={link}
                  aria-label={title}
                  id={`${id}-${index}`}
                  class="w-[200px] h-12 flex justify-center items-center bg-primary hover:bg-dark-blue text-white font-medium uppercase rounded-lg my-2"
                >
                  {button}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div class="absolute z-30 flex -translate-x-1/2 bottom-1 left-1/2 invisible md:visible">
          {images.map((_, index) => (
            <button
              data-dot
              aria-label={`Focus slide carousel ${index}`}
              class="p-1"
            >
              <div class="w-2 h-2 rounded-full border border-1 border-solid border-white" />
            </button>
          ))}
        </div>
      </div>

      <Slider id={id} items={images.length} delay={delay * 1000} />
    </>
  );
}

export default Carousel;
