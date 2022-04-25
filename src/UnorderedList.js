import ListItem from "./ListItem";
import "./NestedList.scss";

function UnorderedList({ data, section, type, name }) {
  const parentName = section;
  if (data) {
    return (
      <>
        {type === "checkbox" ? (
          <>
            <input
              type="checkbox"
              name="list"
              id={section}
              className="checkbox"
            />
            <label for={section} className="checkbox-label">
              <div className="teams">
                {section}
                {name}
              </div>
            </label>
          </>
        ) : type === "radio" ? (
          <>
            <input type="radio" name="main" id={section} className="radio" />
            <label for={section} className="radio-label">
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
              key={section}
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
