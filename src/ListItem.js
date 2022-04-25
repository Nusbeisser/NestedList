import UnorderedList from "./UnorderedList";

function ListItem({ data, section, type, name, parentName }) {
  //const for labels (input appearance) class checkbox/radio
  const inputType =
    type === "checkbox"
      ? "checkbox-label"
      : type === "radio"
      ? "radio-label"
      : null;
  if (
    typeof data != "object" ||
    (Object.keys(data).length === 0 && type === undefined)
  ) {
    return (
      <li className="division">
        {section ? section : name}
        <br />
        {section ? name : null}
        {data}
      </li>
    );
  }

  if (type === "checkbox" || type === "radio") {
    return (
      <li>
        <input type={type} name={parentName} id={section} className={type} />
        <label htmlFor={section} className={inputType}>
          <div className="teams">
            {section}
            <br />
            {name}
          </div>
        </label>
        <UnorderedList data={data} section={section} />
      </li>
    );
  } else if (type === undefined) {
    return (
      <>
        <li>{section}</li>
        {name}
      </>
    );
  }
}

export default ListItem;
