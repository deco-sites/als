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
      class="flex w-full overflow-x-scroll justify-center"
      style={{ boxShadow: "0 8px 10px -8px rgb(0 0 0 / 12%)" }}
    >
      <ul
        class="flex flex-row flex-nowrap justify-between md:justify-around items-center list-none py-5 w-full max-w-[96rem]"
        aria-label="Brands"
      >
        {brands.map(({ name, src, link }) => (
          <li class="flex min-w-[120px] w-36 h-auto justify-center items-center px-2">
            <a title={name} href={link}>
              <img
                src={src}
                alt={name}
                class="object-cover h-12"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
