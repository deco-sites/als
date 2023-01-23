import { Separator } from "$components/Separator.tsx";
import { Star } from "$components/icons/Star.tsx";

export function Review() {
  return (
    <section class="py-4">
      <div class="flex pb-4">
        <Star active />
        <Star active />
        <Star active />
        <Star active />
        <Star />
        <span class="ml-1 italic text-[#9e9e9e]">4</span>
      </div>
      <h1 class="font-bold text-xl tracking-wide pb-2 text-[#2e2e2e]">
        Not Warm at All
      </h1>
      <ul class="flex pb-2 text-[#2e2e2e]">
        <li class="tracking-wide text-base mr-5">Verifier buyer</li>
        <li class="tracking-wide text-base mr-5">
          <span class="font-bold">Submitted</span> 11 months ago
        </li>
        <li class="tracking-wide text-base mr-5">
          <span class="font-bold">By</span> William
        </li>
        <li class="tracking-wide text-base mr-5">
          <span class="font-bold">From</span> Undisclosed
        </li>
      </ul>
      <p class="text-[#707070] tracking-wide">
        Better off buying the Carharrt Gilliam jacket which is warmer & 1/2 the
        cost!
      </p>
    </section>
  );
}

export function ReviewsFooterPagination() {
  return (
    <div class="flex items-center justify-end mt-3">
      <span class="text-sm font-bold text-[#979899]">1 - 2 of 2</span>
      <button
        class="w-7 h-7 bg-[#f2f2f2] rounded-md ml-2 mr-1 flex justify-center items-center"
        aria-label="Previous reviews"
      >
        <svg
          class="rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            fill="#979797"
            d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
          />
        </svg>
      </button>
      <button
        class="w-7 h-7 bg-[#f2f2f2] rounded-md flex justify-center items-center"
        aria-label="Next reviews"
      >
        <svg
          class="-rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            fill="#979797"
            d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
          />
        </svg>
      </button>
    </div>
  );
}

export default function Reviews() {
  return (
    <section class="flex justify-center">
      <div class="w-full max-w-[80rem] px-10">
        <Separator title="Reviews" />
        <h2 class="py-3 font-semibold text-2xl">Reviewed by 1 costumer</h2>
        <hr />
        <div class="py-4">
          <select
            name="sort"
            id="sort"
            class="mr-5 px-3 py-2 rounded-md border-2 bg-white font-semibold tracking-wider"
          >
            <option value="Most recent">Most recent</option>
            <option value="Oldest">Oldest</option>
            <option value="Highest rated">Highest rated</option>
            <option value="Lowest rated">Lowest rated</option>
            <option value="Most helpful">Most helpful</option>
            <option value="Images">Images</option>
          </select>

          <select
            name="filter"
            id="filter"
            class="px-3 py-2 rounded-md border-2 bg-white font-semibold tracking-wider"
          >
            <option value="all">All</option>
            <option value="1 star">1 star</option>
            <option value="2 stars">2 stars</option>
            <option value="3 stars">3 stars</option>
            <option value="4 stars">4 stars</option>
            <option value="5 stars">5 stars</option>
          </select>
        </div>

        <a
          href="#"
          alt="Write a review"
          class="text-primary underline underline-offset-3 tracking-wider"
        >
          Write a review
        </a>
        <Review />
        <Review />
        <ReviewsFooterPagination />
      </div>
    </section>
  );
}
