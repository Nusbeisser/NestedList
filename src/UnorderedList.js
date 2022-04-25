import ListItem from "./ListItem";
import "./NestedList.scss";

function UnorderedList({ data, section, type, name }) {
  console.log("UnorderedList");
  console.log(data);

  if (data) {
    return (
      <>
        {type === "checkbox" ? (
          <input
            type="checkbox"
            name="list"
            id={section}
            className="checkbox"
          />
        ) : null}
        <label for={section} className="checkbox-label">
          <div className="teams">
            {section}
            {name}
          </div>
        </label>
        <ul>
          {data.map(({ data, section, type, name }) => (
            <ListItem
              section={section}
              data={data}
              type={type}
              name={name}
              key={section}
            />
          ))}
        </ul>
      </>
    );
  }
  return <>Something goes wrong : /</>;
}

export default UnorderedList;
