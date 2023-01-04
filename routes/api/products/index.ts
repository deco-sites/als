import { Handlers } from "$fresh/server.ts";
import { products } from "../../../data/products.ts";

export const handler: Handlers = {
  GET() {
    return Response.json(products.men);
  },
};
