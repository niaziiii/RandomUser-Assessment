import React from "react";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { classNames } from "primereact/utils";
import { useAssessmentContext, actionTypes } from "../../../context";

const Pagination = () => {
  const { state, dispatch } = useAssessmentContext();
  const { pagination: paginationData } = state;

  const _onPageChange = (event: PaginatorPageChangeEvent) => {
    const newQuery = {
      ...state.pagination,
      rows: event.rows,
      first: event.first,
      page: event.page,
      pageCount: event.pageCount,
      pageSize: event.rows,
    };

    dispatch({ type: actionTypes.SET_PAGINATION, payload: newQuery });
  };

  return (
    <div>
      <div className="w-full flex items-center justify-center pt-4 pb-10">
        <div className="card">
          <Paginator
            first={paginationData.first}
            rows={paginationData.rows}
            totalRecords={state.users.length}
            rowsPerPageOptions={[5, 10, 20, 30]}
            onPageChange={_onPageChange}
            pt={Tailwind.paginator}
          />
        </div>
      </div>
    </div>
  );
};
export default Pagination;

const Tailwind = {
  paginator: {
    root: {
      className: classNames(
        "flex items-center justify-center flex-wrap",
        "text-gray-500 border-0 px-4 py-2 rounded-md"
      ),
    },
    firstpagebutton: ({ context }) => ({
      className: classNames(
        "relative inline-flex items-center justify-center user-none overflow-hidden leading-none",
        "border-0 text-gray-500  min-w-[3rem] h-12 m-[0.143rem] rounded-md",
        "transition duration-200",
        " ",
        {
          "cursor-default pointer-events-none opacity-60": context.disabled,
          "focus:outline-none focus:outline-offset-0": !context.disabled,
        }
      ),
    }),
    previouspagebutton: ({ context }) => ({
      className: classNames(
        "relative inline-flex items-center justify-center user-none overflow-hidden leading-none",
        "border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md",
        "transition duration-200",
        " ",
        {
          "cursor-default pointer-events-none opacity-60": context.disabled,
          "focus:outline-none focus:outline-offset-0": !context.disabled,
        }
      ),
    }),
    nextpagebutton: ({ context }) => ({
      className: classNames(
        "relative inline-flex items-center justify-center user-none overflow-hidden leading-none",
        "border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md",
        "transition duration-200",
        " ",
        {
          "cursor-default pointer-events-none opacity-60": context.disabled,
          "focus:outline-none focus:outline-offset-0": !context.disabled,
        }
      ),
    }),
    lastpagebutton: ({ context }) => ({
      className: classNames(
        "relative inline-flex items-center justify-center user-none overflow-hidden leading-none",
        "border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md",
        "transition duration-200",
        " ",
        {
          "cursor-default pointer-events-none opacity-60": context.disabled,
          "focus:outline-none focus:outline-offset-0": !context.disabled,
        }
      ),
    }),
    pagebutton: ({ context }) => ({
      className: classNames(
        "relative inline-flex items-center justify-center user-none overflow-hidden leading-none",
        "border-0 text-gray-500 min-w-[3rem] h-10 m-[0.143rem] rounded-md",
        "transition duration-200",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(255, 255, 255, 1),0_0_0_0.2rem_rgba(191,219,254,1)]",
        {
          "bg-white border-2 border-dashed border-gray-400 text-black font-bold ":
            context.active,
        }
      ),
    }),
    rowperpagedropdown: {
      root: ({ props, state }) => ({
        className: classNames(
          "inline-flex relative cursor-pointer user-none",
          "bg-white border rounded-md",
          "transition duration-200",
          "h-12 mx-2",
          {
            "outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-red-500":
              state.focused && !props.disabled, //Focus
            "border-gray-300": !state.focused,
            "hover:border-red-500": !props.disabled, //Hover
          }
        ),
      }),
      input: {
        className: classNames(
          "font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none",
          "block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0",
          "focus:outline-none focus:outline-offset-0",
          " "
        ),
      },
      trigger: {
        className: classNames(
          "flex items-center justify-center shrink-0",
          "text-gray-500   w-12 rounded-r-md"
        ),
      },
      panel: {
        className: classNames(
          "bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
        ),
      },
      wrapper: {
        className: "overflow-auto",
      },
      list: { className: "m-0 p-0 py-3 list-none" },
      item: ({ context }) => ({
        className: classNames(
          "relative font-normal cursor-pointer space-nowrap overflow-hidden",
          "m-0 py-3 px-5 border-none text-gray-600 rounded-none",
          "transition duration-200",
          " /80", // Dark Mode
          {
            "text-red-700 bg-yellow-500": !context.focused && context.selected,
            "bg-yellow-300": context.focused && context.selected,
            "text-gray-600 bg-gray-300": context.focused && !context.selected,
          }
        ),
      }),
    },
    jumptopageinput: {
      root: {
        className: "inline-flex mx-2",
      },
      input: {
        className: classNames(
          "font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none",
          "block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border border-gray-300 pr-0",
          "focus:outline-none focus:outline-offset-0 focus:border-red-300",
          "  dark:bg-gray-950 dark:border-red-900/40",
          "m-0 flex-auto max-w-[3rem]"
        ),
      },
    },
    jumptopagedropdown: {
      root: ({ props, state }) => ({
        className: classNames(
          "inline-flex relative cursor-pointer user-none",
          "bg-white border rounded-md",
          "transition duration-200",
          "h-12 mx-2",
          "dark:bg-gray-950 dark:border-red-900/40", //DarkMode
          {
            "outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-red-500":
              state.focused && !props.disabled, //Focus
            "border-gray-300": !state.focused,
            "hover:border-red-500": !props.disabled, //Hover
          }
        ),
      }),
      input: {
        className: classNames(
          "font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none",
          "block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0",
          "focus:outline-none focus:outline-offset-0",
          " "
        ),
      },
      trigger: {
        className: classNames(
          "flex items-center justify-center shrink-0",
          "text-gray-500   w-12 rounded-r-md"
        ),
      },
      panel: {
        className: classNames(
          "bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
        ),
      },
      wrapper: { className: "overflow-auto" },
      list: { className: "m-0 p-0 py-3 list-none" },
      item: ({ context }) => ({
        className: classNames(
          "relative font-normal cursor-pointer space-nowrap overflow-hidden",
          "m-0 py-3 px-5 border-none text-gray-600 rounded-none",
          "transition duration-200",
          {
            "text-red-700 bg-yellow-50  dark:bg-yellow-300":
              !context.focused && context.selected,
            "bg-red-300/40": context.focused && context.selected,
            "text-gray-600 bg-gray-300": context.focused && !context.selected,
          }
        ),
      }),
    },
  },
};
