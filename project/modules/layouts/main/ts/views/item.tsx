import React from "react";
import { routing } from "@beyond-js/kernel/routing";
export function Item({ item }): JSX.Element {
  const [label, path, subPath] = item;

  const navigate = (event: React.SyntheticEvent<HTMLLIElement, Event>) => {
    const { dataset }: EventTarget & HTMLLIElement = event.currentTarget;
    const url = `${dataset.path}${dataset.sub ?? ""}`
    routing.pushState(url);
  };

  return <li onClick={navigate} data-sub={subPath} data-path={path}>{label}</li>;
}
