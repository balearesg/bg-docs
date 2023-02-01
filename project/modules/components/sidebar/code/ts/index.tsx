import React, { PropsWithChildren } from "react";
import { Header } from "./header";
import { DropdownSidebar } from "./sidebar";

interface Props extends Partial<HTMLElement> {
  logo?: JSX.Element;
  onChange?: (isOpen: boolean) => void;
  setIsOpen: any;
  isOpen: boolean;
  items: any;
}

export /*bundle*/ function SidebarHeader(
  props: PropsWithChildren<Props>
): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const cls: string = isOpen ? "main-content expand" : "main-content ";
  return (
    <>
      <div className="container-sidebar-header">
        <DropdownSidebar {...props} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Header isOpen={isOpen} />
      </div>
      <main className={cls}>{props.children}</main>
    </>
  );
}
