import React from "react";
import { URI, routing } from "@beyond-js/kernel/routing";
export function Item({ item }): JSX.Element {
  const navigate = (event: React.SyntheticEvent<HTMLLIElement, Event>) => {
    const { dataset }: EventTarget & HTMLLIElement = event.currentTarget;
    const url = `${dataset.path}${dataset.sub ?? ""}`
    routing.pushState(url);
  };
  return <li onClick={navigate} data-sub={item.subPath} data-path={item.path}>{item.label}</li>;
}
