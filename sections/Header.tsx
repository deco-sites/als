import type { h } from "preact";
import Icon from "$components/ui/Icon.tsx";
import PromoBar from "$components/PromoBar.tsx";

import Minicart from "../islands/Minicart.tsx";

function NavItem({
  href,
  children,
  class: className,
}: h.JSX.HTMLAttributes<HTMLLIElement>) {
  return (
    <a
      href={href ?? `/search?ft=${children}`}
      class={`flex items-center text-[16px] font-medium`}
    >
      {children}
    </a>
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
        <button aria-label="open menu" class="p-2 lg:hidden">
          <Icon name="Bars3" className="w-8 h-8 text-white" />
        </button>
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
            <button type="submit">
            </button>
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
        <div class="flex w-full justify-between px-10 max-w-[1200px]">
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
        </div>
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
