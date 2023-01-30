import React from "react";
import { User } from "./user";

export function Header({ isOpen }): JSX.Element {
  const cls: string = isOpen ? "header expand" : "header";
  return (
    <header className={cls}>
      <User />
    </header>
  );
}
