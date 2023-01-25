import { ImageObject } from "https://deno.land/x/live@0.3.23/std/commerce/types.ts";
import Image from "$live/std/ui/components/Image.tsx";
import { css, tw } from "twind/css";

type ImageObjectWithValue = ImageObject & {
  value?: string;
};

export interface Props {
  title?: string;
  colorSelected?: string;
  images?: ImageObjectWithValue[];
  onClick?: (size: string) => void;
}

export default function ColorImages(
  { images, title, colorSelected, onClick }: Props,
) {
  const boxShadowClassName = tw(css({
    "@media (min-width: 640px)": {
      boxShadow: "0 0px 6px rgb(0 0 0 / 16%)",
    },
  }));

  return (
    <>
      {title && <p class="font-bold text-[#2e2e2e] my-2">Color</p>}
      <div class="flex flex-wrap gap-2">
        {images && images.map((imageData, index) => (
          <button
            aria-label={imageData.alternateName}
            onClick={() =>
              onClick && imageData.value && onClick(imageData.value)}
            class={`
              w-[78px] h-[78px] relative p-2 rounded-lg cursor-pointer
              ${boxShadowClassName}
              ${
              imageData.value === colorSelected ? "border-2 border-black" : ""
            }
            `}
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
            {imageData.value === colorSelected && (
              <div class="w-full h-full bg-black opacity-25 absolute top-0 left-0" />
            )}
          </button>
        ))}
      </div>
    </>
  );
}
