import React, { useState } from "react";
import {
  Dropdown as DropDownComponent,
  DropdownChangeEvent,
} from "primereact/dropdown";
import { classNames } from "primereact/utils";
import { IOptions } from "../../../utils/types";

export default function Dropdown({
  option,
  handleChange,
  selected,
}: {
  selected?: IOptions;
  option: IOptions[];
  handleChange: (arg1: IOptions) => void;
}) {
  const [selectedCity, setSelectedCity] = useState<IOptions | null>(
    selected ? selected : null
  );

  const handleChangeSelected = (e: DropdownChangeEvent) => {
    setSelectedCity(e.value);
    handleChange(e.value);
  };

  return (
    <div className="card flex justify-content-center">
      <DropDownComponent
        value={selected}
        showClear
        onChange={handleChangeSelected}
        options={option}
        optionLabel="name"
        placeholder="Select Gender"
        className="w-[11rem] max-w-[11rem] border-2 border-gray-400 outline-none border-dashed  text-gray-400 hover:text-gray-500"
        pt={Tailwind.dropdown as any}
      />
    </div>
  );
}

const TRANSITIONS = {
  overlay: {
    enterFromClass: {
      className: "opacity-0 scale-75",
    },
    enterActiveClass: {
      className: "transition-transform transition-opacity duration-150 ease-in",
    },
    leaveActiveClass: {
      className: "transition-opacity duration-150 ease-linear",
    },
    leaveToClass: {
      className: "opacity-0",
    },
  },
};

const Tailwind = {
  dropdown: {
    root: ({ props }) => ({
      className: classNames(
        "cursor-pointer inline-flex relative select-none",
        "bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md",
        "dark:bg-gray-900",
        "w-full md:w-56",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]",
        {
          "opacity-60 select-none pointer-events-none cursor-default":
            props.disabled,
        }
      ),
    }),
    input: ({ props }) => ({
      className: classNames(
        "cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative",
        "bg-transparent border-0 text-gray-400",
        "p-3 transition duration-200 bg-transparent rounded appearance-none font-sans text-base",
        "focus:outline-none focus:shadow-none",
        { "pr-7": props.showClear }
      ),
    }),
    trigger: {
      className: classNames(
        "flex items-center justify-center shrink-0",
        "bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg"
      ),
    },
    wrapper: {
      className: classNames(
        "max-h-[200px] overflow-auto",
        "bg-white text-gray-700 border-0 rounded-md shadow-lg",
        "dark:bg-gray-900 dark:text-white/80"
      ),
    },
    list: {
      className: "py-3 list-none m-0",
    },
    item: ({ context }) => ({
      className: classNames(
        "cursor-pointer font-normal overflow-hidden relative whitespace-nowrap",
        "m-0 p-3 border-0  transition-shadow duration-200 rounded-none",
        "dark:text-white/80 dark:hover:bg-gray-800",
        "hover:text-gray-700 hover:bg-gray-200",
        {
          "text-gray-700": !context.focused && !context.selected,
          "bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90":
            context.focused && !context.selected,
          " dark:text-white/80": !context.focused && context.selected,
          "opacity-60 select-none pointer-events-none cursor-default":
            context.disabled,
        }
      ),
    }),
    itemgroup: {
      className: classNames(
        "m-0 p-3 text-gray-800 bg-white font-bold",
        "dark:bg-gray-900 dark:text-white/80",
        "cursor-auto"
      ),
    },
    header: {
      className: classNames(
        "p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg"
      ),
    },
    filtercontainer: "relative",
    filterinput: {
      className: classNames(
        "pr-7 -mr-7",
        "w-full",
        "font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none",
        "dark:bg-gray-900",
        "hover:border-gray-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]"
      ),
    },
    filtericon: {
      className: "-mt-2 absolute top-1/2",
    },
    clearicon: {
      className: "text-gray-500 right-12 -mt-2 absolute top-1/2",
    },
    transition: TRANSITIONS.overlay,
  },
};
