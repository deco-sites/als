import links from "../../data/links.ts";

export const FooterSections = [
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
    label: "About Al's",
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
          <a
            href={links.social.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href={links.social.facebook}
            rel="noopener noreferrer"
            target="_blank"
          >
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

export default FooterSections;
