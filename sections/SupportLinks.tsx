import links from "../data/links.ts";

export default function SupportLinks() {
  return (
    <div class="flex w-full justify-center">
      <ul
        class="flex flex-col md:flex-row list-none py-10 gap-10 w-full max-w-[96rem]"
        aria-label="Brands"
      >
        <li class="flex md:flex-col w-full justify-center items-center px-6 gap-4">
          <div class="w-1/2 md:w-full flex justify-center items-center text-center">
            <img
              src="/assets/support_store_hours.svg"
              alt="Store hours"
              width={100}
              height={100}
            />
          </div>
          <div class="w-1/2 md:w-full text-lg md:text-center">
            <h3 class="font-semibold md:mb-4 text-gray">Store Hours</h3>
            <p class="text-light-gray">
              Mon-Sat: 9AM-9PM<br />Sunday: Closed
            </p>
            <a
              title="Store Locations"
              href=""
              class="text-primary md:text-light-gray"
            >
              Locations
            </a>
          </div>
        </li>

        <li class="flex md:flex-col w-full justify-center items-center px-6 gap-4">
          <div class="w-1/2 md:w-full flex justify-center items-center text-center">
            <img
              src="/assets/support_hours.svg"
              alt="Support Hours"
              width={100}
              height={100}
            />
          </div>
          <div class="w-1/2 md:w-full text-lg md:text-center">
            <h3 class="font-semibold md:mb-4">Support Hours</h3>
            <p class="text-light-gray">
              Mon-Sat: 9AM-9PM
            </p>
            <div class="flex flex-col">
              <a
                title="Call Us Now"
                href={links.tel}
                class="text-primary md:text-light-gray"
              >
                Call Now
              </a>
              <a
                title="Email Us"
                href={links.mailto}
                class="text-primary md:text-light-gray"
              >
                Email
              </a>
            </div>
          </div>
        </li>

        <li class="flex md:flex-col w-full justify-center items-center px-6 gap-4">
          <div class="w-1/2 md:w-full flex justify-center items-center text-center">
            <img
              src="/assets/support_faq.svg"
              alt="FAQ"
              width={100}
              height={100}
            />
          </div>
          <div class="w-1/2 md:w-full text-lg md:text-center">
            <h3 class="font-semibold md:mb-4">FAQ</h3>
            <p class="text-light-gray">Curbside Pickup</p>
            <div class="flex flex-col">
              <a
                title="Free Shipping"
                href=""
                class="text-primary md:text-light-gray"
              >
                Free Shipping
              </a>
              <a
                title="Returns"
                href=""
                class="text-primary md:text-light-gray"
              >
                Returns
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
