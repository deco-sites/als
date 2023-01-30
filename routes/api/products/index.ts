import { Handlers } from "$fresh/server.ts";
import { vtex } from "../../../clients/instances.ts";
import { PriceModel } from "../../../models/price-model.ts";

import type { Product as ProductVTEX } from "$live/std/commerce/vtex/types.ts";
import type { Image, Product } from "../../../interfaces/product.ts";

type ImageVTEX = ProductVTEX["items"][0]["images"][0];

export const ImageMapper = {
  create: (imageData: ImageVTEX): Image => ({
    label: imageData.imageLabel,
    url: imageData.imageUrl,
  }),
};

export const ProductMapper = {
  create: (product: ProductVTEX): Product => {
    const images = (product.items[0]?.images ?? [])
      .map(ImageMapper.create)
      .slice(0, 3);
    const price = PriceModel.create(
      product.priceRange.listPrice.lowPrice,
      product.priceRange.listPrice.highPrice,
    );
    const priceWithDiscount = PriceModel.create(
      product.priceRange.sellingPrice.lowPrice,
      product.priceRange.sellingPrice.highPrice,
    );

    return {
      title: product.brand,
      description: product.productName,
      price: price,
      priceWithDiscount: price !== priceWithDiscount ? priceWithDiscount : "",
      rating: 5,
      percentageDiscount: 50,
      image: images[0],
      images: images,
      link: product.link ?? `${product.link}?skuId=${product.items[0].itemId}`,
      // link: `${product.link}?skuId=${product.items[0].itemId}`,
    };
  },
};

export const handler: Handlers = {
  async GET(request) {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);

    const count = searchParams.get("count");
    const keyword = searchParams.get("keyword");
    const parentKeyword = searchParams.get("parentKeyword");

    const xvetResponse = await vtex.search.products({
      count: Number(count),
      page: 1,
      query: `${parentKeyword} ${keyword}`,
      account: "alssports",
    });

    const products = xvetResponse.products.map(ProductMapper.create);

    return Response.json(products);
  },
};
