import { Image } from "$live/std/ui/types/Image.ts";

export interface Brand {
  name: string;
  src: Image;
  link: string;
}

export interface Props {
  brands: Brand[];
}

export default function BrandBar(
  { brands }: Props,
) {
  return (
    <div
      class="w-full overflow-x-scroll"
      style={{ boxShadow: "0 8px 10px -8px rgb(0 0 0 / 12%)" }}
    >
      <ul
        class="flex flex-row flex-nowrap justify-between md:justify-around items-center list-none py-5"
        aria-label="Brands"
      >
        {brands.map(({ name, src, link }) => (
          <li class="flex min-w-[120px] w-36 justify-center items-center px-2">
            <a title={name} href={link}>
              <img src={src} alt={name} class="object-cover h-12" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
