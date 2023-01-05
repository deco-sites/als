import { h } from "preact";
import { useState } from "preact/hooks";
import Dropdown from "./Dropdown.tsx";
import Icon from "$components/ui/Icon.tsx";

export default function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => setOpen(!open);

  return (
    <div>
      <button
        aria-label="open menu"
        class="p-2 lg:hidden"
        onClick={handleToggle}
      >
        <Icon name="Bars3" className="w-8 h-8 text-white" />
      </button>

      <div
        class={`fixed flex flex-col justify-start w-10/12 h-full left-0 top-0 bg-white overflow-auto ease-in-out transition ${
          open ? "" : "-translate-x-full"
        }`}
      >
        <div class="p-4">
          <button class="text-gray font-bold w-7 h-7" onClick={handleToggle}>
            X
          </button>
        </div>

        <nav class="flex justify-center mt-3 mb-6">
          <ul class="flex">
            <li class="flex justify-center items-center bg-gray-200 w-[45px] h-[45px] rounded-full mx-2">
              <a href="#" class="text-gray">tel</a>
            </li>
            <li class="flex justify-center items-center bg-gray-200 w-[45px] h-[45px] rounded-full mx-2">
              <a href="#" class="text-gray">email</a>
            </li>
            <li class="flex justify-center items-center bg-gray-200 w-[45px] h-[45px] rounded-full mx-2">
              <a href="#" class="text-gray">map</a>
            </li>
            <li class="flex justify-center items-center bg-gray-200 w-[45px] h-[45px] rounded-full mx-2">
              <a href="#" class="text-gray">user</a>
            </li>
          </ul>
        </nav>

        <Dropdown
          label="Men's"
          items={["Clothing", "Footwear", "Accessories"]}
        />
        <Dropdown
          label="Women's"
          items={["Clothing", "Footwear", "Accessories"]}
        />
        <Dropdown label="Kids'" items={["Boys", "Girls", "Infant & Toddler"]} />
        <Dropdown
          label="Camp & Hike"
          items={[
            "Sleeping",
            "Tents & Shelters",
            "Backpacks",
            "Camp Kitchen",
            "Lighting",
            "Camp Furniture",
            "Hydration",
          ]}
        />
        <Dropdown
          label="Climbing"
          items={[
            "Hardware",
            "Hardnesses",
            "Essentials",
            "Mountaineering",
            "Shoes",
          ]}
        />
        <Dropdown
          label="Hunting"
          items={[
            "Optics",
            "Archery",
            "Hunting Clothing",
            "Hunting & Shooting Gear",
            "Packs & Bags",
          ]}
        />
        <Dropdown
          label="Fishing"
          items={["Fishing", "Fly Fishing", "Fishing Clothing"]}
        />
        <Dropdown
          label="Sports"
          items={[
            "Baseball",
            "Softball",
            "Soccer",
            "Football",
            "Lacrosse",
            "Basketball",
            "Other Sports",
          ]}
        />
        <Dropdown
          label="Snow"
          items={[
            "Alpine Skiing",
            "Backcountry Skiing",
            "Cross-Country Skiing",
            "Snowboarding",
            "Helmets & Goggles",
            "Avalanche Safety Gear",
            "Snowshoeing",
            "Accessories",
          ]}
        />
        <Dropdown
          label="Water"
          items={[
            "Water Skiing",
            "Wakesports",
            "Towables",
            "Life Vests & Wetsuits",
            "Paddlesports",
          ]}
        />
        <Dropdown
          label="Bike"
          items={[
            "Bikes",
            "Components",
            "Maintenance",
            "Accessories",
            "Clothing",
            "Protection",
          ]}
        />
        <Dropdown label="All Brands" items={[]} />
      </div>
    </div>
  );
}
