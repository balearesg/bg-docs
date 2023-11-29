import React from "react";
import { texts } from "../../types";
import Item from "./item";

type props = {
  texts: texts;
  validate: string;
};

type item = {
  label: string;
  regExp: string
}
export function ValidatePassword({ texts, validate }: props): JSX.Element {
  const dataValidate: item[] = [
    {
      label: texts.lowercase,
      regExp: "(?=.*[a-z])",
    },
    {
      label: texts.uppercase,
      regExp: "(?=.*[A-Z])",
    },
    {
      label: texts.number,
      regExp: "(?=.*[0-9])",
    },
    {
      label: texts.specialCharacter,
      regExp: "(?=.*[!@#$%^&*])",
    },
    {
      label: texts.eightCharacters,
      regExp: "(?=.{8,})",
    },
  ];
  const output: JSX.Element[] = dataValidate.map((item: item): JSX.Element => {
    return <Item key={item.regExp} item={item} validate={validate} />;
  });
  return (
    <div className="validation">
      <ul>{output}</ul>
    </div>
  );
}
