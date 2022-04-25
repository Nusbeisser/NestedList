import ListItem from "./ListItem";
import "./NestedList.scss";

function UnorderedList({ data, section, type, name }) {
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
            <input type={type} name="list" id={section} className={type} />
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
            />
          ))}
        </ul>
      </>
    );
  }
  return <>Something goes wrong : /</>;
}

export default UnorderedList;
