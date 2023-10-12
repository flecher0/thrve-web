"use client";

import { HTMLAttributes, Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface DropdownProps {
  menu?: MenuSection[];
  content?: HTMLAttributes<HTMLElement>["children"];
  children?: HTMLAttributes<HTMLElement>["children"];
}

interface MenuSection {
  items: SectionItem[];
}

interface SectionItem {
  name: string;
  href?: string;
  onClick?: HTMLAttributes<HTMLElement>["onClick"];
  className?: string;
}

export default function Dropdown({ children, menu, content }: DropdownProps) {
  const className =
    "absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none";
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>{children}</Menu.Button>
      {(menu || content) && (
        <Transition
          as="div"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {menu ? (
            <Menu.Items className={className}>
              {menu.map((section, i) => (
                <div className="py-1" key={i}>
                  {section.items.map(({ name, href }, j) => (
                    <Menu.Item key={`${i}-${j}`}>
                      {({ active }) =>
                        href ? (
                          <Link
                            href={href}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm",
                            )}
                          >
                            {name}
                          </Link>
                        ) : (
                          <span>{name}</span>
                        )
                      }
                    </Menu.Item>
                  ))}
                </div>
              ))}
            </Menu.Items>
          ) : content ? (
            <div className={className}>{content}</div>
          ) : (
            <div />
          )}
        </Transition>
      )}
    </Menu>
  );
}
