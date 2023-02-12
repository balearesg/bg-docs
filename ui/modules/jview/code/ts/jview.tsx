import React, { useState, useEffect } from "react";
import { Controller } from "./controller";
import { Props, State, propsController } from "./types";
import { JViewContext } from "./context";
import { View } from "./view";
export /*bundle*/
function JView(props: Props): JSX.Element {
  const { rows, onPrev, onNext, action } : Props = props;
  const propsController: propsController = {
    total: props.total,
    rows,
    action,
    current: props.current,
    entries: props.entries,
    onPrev,
    onNext,
  };
  const [state, setState] = useState<State>({});
  let [total, setTotal] = useState<number>(props.total);
  let [entries, setEntries] = useState<Array<any>>(props.entries);
  const [current, setCurrent] = useState<number>(props.currentPage ?? 1);
  const [ pages, setPages ] = useState()

  useEffect(() => {
    const update = (specs: object = {}): void => {
      setState({ ...state, ...specs, controller });
      const page  = typeof controller.current === "string" ? parseInt(controller.current) : controller.current;
      setCurrent(page);
    };
    const controller: any = new Controller(propsController);
    controller.bind("change", update);
    update();
    return () => controller.unbind("change", update);
  }, []);

  useEffect((): void => {
    if (props.total !== total) {
      setTotal(props.total);
      if (state.controller) state.controller.current = 1;
      setCurrent(1);
    }

    setTimeout(() => {
      if (props.currentPage) {
        if (state?.controller) state.controller.current = props.currentPage;
        const page  = typeof props.currentPage === "string" ? parseInt(props.currentPage) : props.currentPage;
        setCurrent(page);
      }
    }, 500);

    setEntries(props.entries);
  }, [props.total, props.entries, props.currentPage]);

  if (!state.controller) return null;

  const value = {
    ...props,
    state,
    props,
    current,
    pages,
    total,
    entries,
    setPages
  };
  return (
    <JViewContext.Provider value={value}>
      <View />
    </JViewContext.Provider>
  );
}

JView.defaultProps = {
  scroll: false,
  animation: false
};
