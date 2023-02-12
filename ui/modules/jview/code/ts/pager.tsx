import React, { SyntheticEvent } from "react";
import { useJViewContext } from "./context";

export function Pager(): JSX.Element {
  const { state, entries, current, pages } = useJViewContext();
  const pagesShowed: number = 4;

  const navigate = (event: SyntheticEvent<HTMLLIElement, Event>) => {
    const target: EventTarget & HTMLLIElement =
      event.currentTarget as HTMLLIElement;
    const { page } = target.dataset;
    state.controller.getPage(page ?? parseInt(page), entries);
  };
  const output: JSX.Element[] = [];
  let middle: number, last: number, first: number;
  if (pages <= 1) return null;
  if (pages > 1 && pages >= current) {
    middle = Math.ceil(pagesShowed / 2);
    last = current + middle <= pages ? current + middle : pages;
    first = current > middle ? current - middle : 1;
  }
  for (let i: number = first; i <= last; ++i) {
   
    let cls: string = "pager-item";
    if (i === current) cls += " item-current";

    output.push(
      <li className={cls} data-page={i} key={`item-${i}`} onClick={navigate}>
        {i}
      </li>
    );
  }

  if (pages > 1 && current > 2) {
    output.unshift(
      <li key="first" data-page={1} onClick={navigate} className="pager-item">
        {"<<"}
      </li>
    );
  }

  if (current !== pages && pages > 2 && current !== pages - 1 && current + 2 !== pages) {
    output.push(
      <li
        key="last"
        data-page={pages}
        onClick={navigate}
        className="pager-item"
      >
        {pages}
      </li>
    );
  }
  return (
    <div className="jview-component-pager">
      <ul>{output}</ul>
    </div>
  );
}
