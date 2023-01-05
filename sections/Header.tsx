import type { h } from "preact";
import Icon from "$components/ui/Icon.tsx";
import PromoBar from "$components/PromoBar.tsx";
import Sidebar from "../islands/Sidebar.tsx";
import { css, tw } from "twind/css";

import Minicart from "../islands/Minicart.tsx";

const navigationItems = [
  [
    "FEATURED",
    "Jackets",
    "Pants",
    "Boots",
    "Winter",
    "SALE",
  ],
  [
    "Clothing",
    "Jackets",
    "Shirts",
    "Hoodies & Sweaters",
    "Pants",
    "Shorts",
    "Swimwear",
    "Baselayers",
  ],
  [
    "Footwear",
    "Casual",
    "Athlelic Sneakers",
    "Running",
    "Cross Training Shoes",
    "Hiking",
    "Sandals",
    "Climbing",
  ],
  [
    "Accessories",
    "Hats",
    "Gloves & Mittens",
    "Belts",
    "Gaiters",
    "Sunglasses",
    "Watches",
  ],
];

function NavItem({
  href,
  children,
  class: className,
}: h.JSX.HTMLAttributes<HTMLLIElement>) {
  const containerClass = tw(css({
    "&:hover div[data-menu]": {
      visibility: "visible",
    },
  }));

  return (
    <li class={`flex items-center ${containerClass}`}>
      <div>
        <a
          href={href ?? `/search?ft=${children}`}
          class="text-[16px] font-medium"
        >
          {children}
        </a>
        <div
          data-menu
          class="mt-[13px] left-0 rigth-0 absolute box-border w-full invisible"
        >
          <section class="flex max-h-96 bg-[rgba(0,0,0,.8)] pt-4 pb-7 px-4 justify-center">
            <div class="flex gap-1.5 container justify-center">
              {navigationItems.map((items) => (
                <nav class="my-1 mx-6" style="min-width: 120px">
                  <ul>
                    {items.map((item, index) => (
                      <li class="pb-1">
                        <a
                          class={`font-bold ${
                            index === 0 ? "text-xl text-primary" : "text-white"
                          }`}
                          alt={item}
                          href="#"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </section>
        </div>
      </div>
    </li>
  );
}

function Navbar() {
  return (
    <div class="bg-[rgba(0,0,0,.8)] text-white flex flex-col items-center">
      <section class="hidden lg:flex flex-row h-8 px-2 items-center justify-between w-full max-w-[96rem]">
        <a href="#">Free shipping on orders over $50</a>
        <a href="#" class="flex gap-1 items-center">
          <img
            alt="Locations"
            class="w-3 h-3"
            src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/9a54e5e3-2c66-4aad-a3d9-3c2065a43d06___d1d08ba5a21135a29706ee9b78a7b4a4.svg"
          />
          Locations
        </a>
      </section>

      <section class="w-full flex h-[50px] lg:h-[64px] items-center px-1 lg:px-4 md:border-b md:border-t border-[rgba(255,255,255,0.2)] max-w-[96rem]">
        <Sidebar />

        <img
          width="85"
          height="60"
          alt="ALS.com"
          crossOrigin="anonymous"
          data-src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/2aea5e7c-6d5b-4c5c-80bb-74969c800993___656712b40f49a24e8b5cecbeae369b92.svg"
          loading="lazy"
          src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/2aea5e7c-6d5b-4c5c-80bb-74969c800993___656712b40f49a24e8b5cecbeae369b92.svg"
          class="w-[85px] h-[60px] lg:w-[105px] lg:h-[47px]"
        >
        </img>

        {/* TODO: Implement search bar */}
        <div class="flex flex-grow ml-2 mr-0 lg:ml-8 lg:mr-6 items-center justify-center">
          <form action="">
            <input
              type="search"
              placeholder="Search by product, brand, or category"
              class="w-full lg:w-[700px] h-8 lg:h-9 px-4 rounded-full text-white bg-[#7e7e7e] text-white placeholder-white"
            />
            <button arial-label="Search" type="submit" />
          </form>
        </div>
        <a href="#" class="p-2 hidden lg:block" aria-label="my account">
          <img
            alt="Phone"
            crossOrigin="anonymous"
            src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/11a29410-46bf-4a63-90ee-73f52285fc31___1b935ef5a03bd6c6ee0e7fe7a1b539b5.svg"
            loading="lazy"
            width={30}
            height={30}
            class="w-5 h-5"
          />
        </a>
        <a href="#" class="p-2 hidden lg:block" aria-label="my account">
          <Icon name="User" className="w-6 h-6" />
        </a>
        <Minicart />
      </section>

      <section class="hidden lg:flex flex-row h-[50px] justify-center w-full max-w-[96rem]">
        <nav class="flex w-full justify-between px-10 max-w-[1200px]">
          <NavItem href="/farm">Men's</NavItem>
          <NavItem href="/farm">Woman's</NavItem>
          <NavItem href="/farm">Kids'</NavItem>
          <NavItem href="/farm">Camp & Hike</NavItem>
          <NavItem href="/farm">Climbing</NavItem>
          <NavItem href="/farm">Hunting</NavItem>
          <NavItem href="/farm">Fishing</NavItem>
          <NavItem href="/farm">Sorts</NavItem>
          <NavItem href="/farm">Snow</NavItem>
          <NavItem href="/farm">Water</NavItem>
          <NavItem href="/farm">Bike</NavItem>
          <NavItem href="/farm">Brands</NavItem>
        </nav>
      </section>
    </div>
  );
}

export interface Props {
  promoTitle?: string;
  promoLink?: string;
  positionAbsolute?: boolean;
}

function Header({ promoTitle, promoLink, positionAbsolute }: Props) {
  return (
    <header
      class={`w-full z-10 ${positionAbsolute ? "absolute h-[146px]" : ""}`}
    >
      {(promoTitle && promoLink) &&
        <PromoBar title={promoTitle} href={promoLink} />}
      <Navbar />
    </header>
  );
}

export default Header;
