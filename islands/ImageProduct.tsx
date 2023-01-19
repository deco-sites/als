import { useState } from "preact/hooks";
import type { ImageObject, ProductLeaf } from "$live/std/commerce/types.ts";
import Image from "$live/std/ui/components/Image.tsx";
import { css, tw } from "twind/css";

export interface Props {
  items: Map<string, ProductLeaf>;
}

export default function ProductImage({ items }: Props) {
  const [selected, setSelected] = useState(0);
  const [productSelectedIndex] = useState(0);
  const products = [...items.values()];

  const selectedProduct = products[productSelectedIndex];
  const mainImage: ImageObject | undefined | null = selectedProduct?.image?.at(
    selected,
  );

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
                : `Main product: ${selectedProduct.name}`}
              width={550}
              height={600}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
      <div class="flex gap-2 my-5 justify-center">
        {selectedProduct.image &&
          selectedProduct.image.map((imageData, index) => (
            <button
              aria-label="Change main image"
              onClick={() => {
                setSelected(index);
              }}
              class={`w-[85px] h-[85px] rounded-lg p-2 cursor-pointer ${boxShadowClassName}`}
            >
              <Image
                class={`w-full max-w-full h-auto ${
                  index !== selected ? "opacity-40" : ""
                }`}
                src={imageData.url ?? ""}
                alt={imageData.alternateName
                  ? imageData.alternateName
                  : `Product image ${index}: ${selectedProduct.name}`}
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