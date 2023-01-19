import { ImageObject } from "https://deno.land/x/live@0.3.23/std/commerce/types.ts";
import Image from "$live/std/ui/components/Image.tsx";
import { css, tw } from "twind/css";

export interface Props {
  images?: ImageObject[]
}

export default function SizeImages({ images }: Props) {
  const boxShadowClassName = tw(css({
    "@media (min-width: 640px)": {
      boxShadow: "0 0px 6px rgb(0 0 0 / 16%)",
    },
  }));

  return (
    <>
      {images && images.map((imageData, index) => (
        <button
          aria-label={imageData.alternateName}          
          class={`w-[78px] h-[78px] p-2 rounded-lg cursor-pointer ${boxShadowClassName}`}
        >
          <Image
            class="w-full max-w-full h-auto"
            src={imageData.url ?? ""}
            alt={imageData.alternateName
              ? imageData.alternateName
              : `Product image ${index}`}
            width={75}
            height={75}
            loading="lazy"
            decoding="async"
          />
        </button>
      ))}
    </>
  )
}