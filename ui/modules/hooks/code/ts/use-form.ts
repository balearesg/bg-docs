import { useReducer, useState, ChangeEvent, Dispatch } from "react";

type params<T> = {
  init: T;
  isDisabled?: boolean;
  onChange?: (e) => void;
};

type getInput = {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLElement>) => void;
  label?: string;
  id?: string;
  disabled?: boolean;
  loading?: boolean
};
type getCheckbox = {
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};
type getRadio = {
  name: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  checked: boolean;
  disabled?: boolean;
};
type getSelect = {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
};

type useForm<T> = {
  fields: T;
  onFieldChange: (event: ChangeEvent<any>) => void;
  getSelect: (name?: string, disabledField?: boolean) => getSelect;
  getRadio: (
    name: string,
    value: string,
    label: string,
    disabled?: boolean
  ) => getRadio;
  getCheckbox: (name: string, disabled?: boolean) => getCheckbox;
  getInput: (
    name?: string,
    label?: string,
    id?: string,
    disabled?: boolean
  ) => getInput;
  error: { [x: string]: string };
  setError: Dispatch<any>;
  dispatch: Dispatch<any>;
};
/**
 * It's a hook that returns an object with a bunch of functions that return objects that are used to
 * render form elements.
 * @param {params}  - params
 * @returns An object with the following properties:
 */
export /*bundle*/
  const useForm = <T>({ init, isDisabled, onChange }: params<T>): useForm<T> => {

    const reducer = (state: T, payload: any): any => {
      switch (payload.type) {
        case "reset":
          return init;
        case "change":
          return {
            ...state,
            [payload.name]: payload.value,
          };
        case "changes":
          return {
            ...state,
            ...payload.data,
          };
        default:
          return;
      }
    };
    const [fields, dispatch] = useReducer(reducer, init);
    const [error, setError] = useState<any>({});

    const onFieldChange = (event: ChangeEvent<any>): void => {
      const { value, name, type, checked }: EventTarget & HTMLInputElement =
        event.target;
      dispatch({
        name,
        value: type === "checkbox" ? checked : value,
        type: "change",
      });
      onChange && onChange(event.target);
      setError({});
    };

    return {
      fields,
      onFieldChange,
      getInput: (
        name?: string,
        label?: string,
        id?: string,
        disabled?: boolean
      ): getInput => ({
        name,
        value: fields[name],
        onChange: onFieldChange,
        label: label ?? name,
        id: name ?? id,
        disabled: disabled ?? isDisabled,
        loading: disabled ?? isDisabled,
      }),
      getCheckbox: (name: string, disabled?: boolean): getCheckbox => ({
        name,
        checked: fields[name],
        onChange: onFieldChange,
        disabled: disabled ?? isDisabled,
      }),
      getRadio: (
        name: string,
        value: string,
        label: string,
        disabled?: boolean
      ): getRadio => ({
        name,
        value,
        checked: fields[name] === value,
        onChange: onFieldChange,
        label: label ?? value,
        disabled: disabled ?? isDisabled,
      }),
      getSelect: (name?: string, disabledField?: boolean): getSelect => ({
        name,
        value: fields[name],
        onChange: onFieldChange,
        disabled: disabledField ?? isDisabled,
      }),
      error,
      setError,
      dispatch,
    };
  };
