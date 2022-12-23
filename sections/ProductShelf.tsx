import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

import ProductCard from "../components/ProductCard.tsx";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
}

export default function ProductShelf({
  title,
  products,
}: Props) {
  return (
    <section class="flex flex-col items-center w-full px-4 md:px-0 mx-auto lg:my-12">
      {title && (
        <div class="pb-8 lg:pb-12 mt-8 flex items-center w-full max-w-[96rem]">
          <h2 class="text-5xl font-semibold text-center w-full">{title}</h2>
        </div>
      )}
      <div class="grid grid-cols-2 md:grid-cols-4 md:gap-2 w-full max-w-[96rem]">
        {products?.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
    </section>
  );
}
