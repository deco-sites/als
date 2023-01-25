import { useEffect, useState } from "preact/hooks";
import type { ImageObject, ProductLeaf } from "$live/std/commerce/types.ts";
import Image from "$live/std/ui/components/Image.tsx";
import { css, tw } from "twind/css";

export interface Props {
  productLeafSelected?: ProductLeaf;
}

export default function ProductImage({ productLeafSelected }: Props) {
  if (!productLeafSelected) return <></>;

  const [imageIndexSelected, setImageIndexSelected] = useState(0);
  const mainImage = productLeafSelected.image?.at(imageIndexSelected);

  useEffect(() => {
    setImageIndexSelected(0);
  }, [productLeafSelected]);

  const boxShadowClassName = tw(css({
    "@media (min-width: 640px)": {
      boxShadow: "0 0px 6px rgb(0 0 0 / 16%)",
    },
  }));

  return (
    <>
      <div class="flex justify-center">
        <div class="w-[550px] h-[600px] h-full flex justify-center cursor-zoom-in px-5">
          {mainImage && (
            <Image
              class="object-contain	h-full w-full aspect-auto"
              src={mainImage.url ?? ""}
              alt={mainImage.alternateName
                ? mainImage.alternateName
                : `Main product: ${productLeafSelected?.name}`}
              width={550}
              height={600}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
      <div class="py-5 whitespace-nowrap overflow-x-auto">
        {(productLeafSelected?.image ?? []).map((imageData, index) => (
          <button
            key={imageData.url ?? index}
            aria-label="Change main image"
            onClick={() => setImageIndexSelected(index)}
            class={`w-[85px] h-[85px] mx-2 rounded-lg p-2 cursor-pointer ${boxShadowClassName}`}
          >
            <Image
              class={`w-full max-w-full h-auto ${
                index !== imageIndexSelected ? "opacity-40" : ""
              }`}
              src={imageData.url ?? ""}
              alt={imageData.alternateName
                ? imageData.alternateName
                : `Product image ${index}: ${productLeafSelected?.name}`}
              width={75}
              height={75}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </>
  );
}
