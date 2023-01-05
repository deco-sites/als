import { h } from "preact";
import { useState } from "preact/hooks";

export interface DropdownProps {
  label: string
  items: string[] | DropdownProps[]
}

export default function Dropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false)

  const handleToggle = () => {
    if (items.length > 0) setOpen(!open)
  }

  return (
    <nav class="px-4">
      <div class="py-3 flex items-center justify-between" onClick={handleToggle}>
        <a href="#" class="tracking-wider text-gray font-semibold text-lg ">{label}</a>
        {items.length > 0 && (
          <span class="text-gray-400 font-semibold text-lg">{open ? "-" : "+"}</span>
        )}
      </div>
      {open && (
        <ul class="p-2">
          <li class="leading-10 py-1 flex items-center justify-between">
            <a href="#" class="text-primary font-semibold text-lg">See All</a>
          </li>
          {items.map(item => {
            if (typeof item === 'string') 
              return (
                <li class="leading-10 py-1 flex items-center justify-between">
                  <a href="#" class="text-gray text-lg">{item}</a>
                </li>
              )

            return <Dropdown label={item.label} items={item.items} />
          })}
        </ul>
      )}
    </nav>
  )
}