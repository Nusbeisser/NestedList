import ListItem from "./ListItem";
import "./NestedList.scss";
import { useState } from "react";

function UnorderedList({ data, section, type, name }) {
  const [checked, setChecked] = useState("");

  // foo for handle closing checked radio
  const handleClick = (e) => {
    setChecked(e.target.id);
    if (
      e.target.type === "radio" &&
      (checked === e.target.id ||
        e.target.parentNode.id ||
        e.target.parentNode.localName === "li")
    ) {
      e.target.checked = false;
      setChecked("");
    }
  };
  // foo for check unchecked radio
  const handleChange = (e) => {
    if (e.target.type === "radio") {
      e.target.checked = true;
      setChecked(e.target.id);
    }
  };
  // const for inputs hierarchy
  const parentName = section;
  //const for labels (input appearance) class checkbox/radio
  const inputType =
    type === "checkbox"
      ? "checkbox-label"
      : type === "radio"
      ? "radio-label"
      : null;

  if (data) {
    return (
      <>
        {type === "checkbox" || type === "radio" ? (
          <>
            <input
              type={type}
              name="list"
              id={section}
              className={type}
              onClick={(e) => handleClick(e)}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor={section} className={inputType}>
              <div className="teams">
                {section}
                {name}
              </div>
            </label>
          </>
        ) : null}
        <ul>
          {data.map(({ data, section, type, name }) => (
            <ListItem
              section={section}
              data={data}
              type={type}
              name={name}
              key={section ? section : name}
              parentName={parentName}
              handleChange={(e) => handleChange(e)}
              handleClick={(e) => handleClick(e)}
            />
          ))}
        </ul>
      </>
    );
  }
  return <>Something goes wrong : /</>;
}

export default UnorderedList;
