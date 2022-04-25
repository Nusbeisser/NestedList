import UnorderedList from "./UnorderedList";

function ListItem({
  data,
  section,
  type,
  name,
  parentName,
  handleChange,
  handleClick,
}) {
  //const for labels (input appearance) class checkbox/radio
  const inputType =
    type === "checkbox"
      ? "checkbox-label"
      : type === "radio"
      ? "radio-label"
      : null;

  // for sections that don't have children (data type different than object)
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

  // for sections with data in object/array and radio/checkbox type input
  if (
    (type === "checkbox" || type === "radio") &&
    Object.keys(data).length !== 0
  ) {
    return (
      <li>
        <input
          type={type}
          name={parentName}
          id={section}
          className={type}
          onClick={(e) => handleClick(e)}
          onChange={(e) => handleChange(e)}
        />
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
  }

  // for sections with empty object/array and radio/checkbox type input
  if (
    Object.keys(data).length === 0 &&
    (type === "checkbox" || type === "radio")
  ) {
    return (
      <li>
        <div className="teams empty">
          {section}
          <br />
          {name}
        </div>
      </li>
    );
  }
}

export default ListItem;
