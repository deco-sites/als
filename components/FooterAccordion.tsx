export const sections = [
  {
    label: "Customer Service",
    content: (
      <ul class="flex flex-col text-sm gap-2 font-light my-2">
        <li>
          <a href="#">
            Order Status
          </a>
        </li>
        <li>
          <a href="#">
            Returns / Exchange
          </a>
        </li>
        <li>
          <a href="#">
            Shipping
          </a>
        </li>
        <li>
          <a href="#">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#">
            Locations
          </a>
        </li>
        <li>
          <a href="#">
            Accessibility
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: "About Al\'s",
    content: (
      <ul class="flex flex-col text-sm gap-2 font-light my-2">
        <li>
          <a href="#">
            About Us
          </a>
        </li>
        <li>
          <a href="#">
            Careers
          </a>
        </li>
        <li>
          <a href="#">
            History
          </a>
        </li>
        <li>
          <a href="#">
            Rentals / Services
          </a>
        </li>
        <li>
          <a href="#">
            Terms & Conditions
          </a>
        </li>
        <li>
          <a href="#">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#">
            Payment Options
          </a>
        </li>
        <li>
          <a href="#">
            Custom Apparel
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: "Get Connected",
    content: (
      <ul class="flex flex-col text-sm gap-2 font-light my-2">
        <li>
          <a href="#" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="#" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="#">
            Flash Sales
          </a>
        </li>
        <li>
          <a href="#">
            Deals
          </a>
        </li>
      </ul>
    ),
  },
];

function FooterAccordion() {
  return (
    <div class="w-full">
      {sections.map(({ label, content }) => (
        <div class="bg-[#353535]" key={label}>
          <details class="w-full cursor-pointer flex flex-row justify-between focus:outline-none">
            <summary class="text-white p-6">{label}</summary>
            <div class="p-4 pt-4 pb-2 text-sm text-gray-100 bg-[#222]">
              {content}
            </div>
          </details>
        </div>
      ))}
    </div>
  );
}

export default FooterAccordion;
