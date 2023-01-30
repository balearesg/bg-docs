import React, { PropsWithChildren, MutableRefObject } from "react";
import { BeyondIconButton } from "@bgroup/ui/icon";
import { BeyondScrollContainer } from "@bgroup/ui/perfect-scrollbar";
interface Props extends Partial<HTMLElement> {
  logo?: JSX.Element;
  onChange?: (isOpen: boolean) => void;
  setIsOpen: any;
  isOpen: boolean;
  items: any
}

export  function DropdownSidebar(
  props: Props
): JSX.Element {
  
  const { onChange, items, logo, setIsOpen, isOpen } = props;
  const sidebarRef: MutableRefObject<HTMLElement> =
    React.useRef<HTMLElement>(null);
  const cls: string = isOpen ? "sidebar open" : "sidebar closed";
  const title: string = isOpen ? "close" : "open";

  function toggleIsOpen(): void {
    setIsOpen(!isOpen);
    if (onChange) onChange(isOpen);
  }

  return (
    <aside ref={sidebarRef} className={cls}>
      <div className="sidebar__header">
        {logo && <div className="logo">{logo}</div>}
        <BeyondIconButton
          title={title}
          onClick={toggleIsOpen}
          icon="chevronRight"
          className="toggle__btn"
        />
      </div>
      <BeyondScrollContainer className="sidebar__nav">
        <ul className="sidebar__list">{items}</ul>
      </BeyondScrollContainer>
    </aside>
  );
}
