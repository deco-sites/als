import { ImageObject } from "https://deno.land/x/live@0.3.23/std/commerce/types.ts";
import Image from "$live/std/ui/components/Image.tsx";
import { css, tw } from "twind/css";

type ImageObjectWithItemId = ImageObject & {
  id: string;
};

export interface Props {
  itemIdSelected?: string;
  images?: ImageObjectWithItemId[];
  onClick?: (imageData: ImageObjectWithItemId) => void;
}

export default function SizeImages({ images, onClick, itemIdSelected }: Props) {
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
          onClick={() => onClick && onClick(imageData)}
          class={`w-[78px] h-[78px] relative p-2 rounded-lg cursor-pointer ${boxShadowClassName} ${
            imageData.id === itemIdSelected ? "border-2 border-black" : ""
          }`}
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
          {imageData.id === itemIdSelected && (
            <div class="w-full h-full bg-black opacity-25 absolute top-0 left-0" />
          )}
        </button>
      ))}
    </>
  );
}
