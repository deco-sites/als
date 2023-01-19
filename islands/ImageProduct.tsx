import { useState } from 'preact/hooks'
import type { ImageObject, ProductDetailsPage } from "$live/std/commerce/types.ts";
import Image from "$live/std/ui/components/Image.tsx";
import { css, tw } from "twind/css";

export interface Props {
  product: ProductDetailsPage['product']
}

export default function ProductImage({ product }: Props) {
  const [selected, setSelected] = useState(0)
  const mainImage: ImageObject | undefined | null = product?.image?.at(selected)

  const boxShadowClassName = tw(css({
    "@media (min-width: 640px)": {
      boxShadow: "0 0px 6px rgb(0 0 0 / 16%)",
    },
  }));

  return (
    <>
      <div class="flex justify-center">
        <div class="w-[450px] h-[600px] h-full flex justify-center cursor-zoom-in">
          {mainImage && (
            <Image
              class="object-contain	h-full w-full aspect-auto"
              src={mainImage.url ?? ""}
              alt={mainImage.alternateName
                ? mainImage.alternateName
                : `Main product: ${product.name}`}
              width={326}
              height={489}
              sizes="(max-width: 640px) 40vw, 20vw"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
      <div class="flex gap-2 my-5 justify-center">
        {product.image &&
          product.image.map((imageData, index) => (
            <button
              aria-label="Change main image"
              onClick={() => setSelected(index)}
              class={`w-[85px] h-[85px] rounded-lg p-2 cursor-pointer ${boxShadowClassName}`}
            >
              <Image
                class={`w-full max-w-full h-auto ${index !== selected ? "opacity-40" : ""}`}
                src={imageData.url ?? ""}
                alt={imageData.alternateName
                  ? imageData.alternateName
                  : `Product image ${index}: ${product.name}`}
                width={75}
                height={75}
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
      </div>
    </>
  )
}