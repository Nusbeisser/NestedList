import UnorderedList from "./UnorderedList";

function ListItem({ data, section, type, name }) {
  console.log("listajtem");
  console.log(data);

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

  if (type === "checkbox") {
    return (
      <li>
        <input type="checkbox" name="list" id={section} className="checkbox" />
        <label for={section} className="checkbox-label">
          <span class="checkbox-plus"></span>
          <span class="checkbox-minus"></span>
          <div className="teams">
            {section}
            <br />
            {name}
          </div>
        </label>
        <UnorderedList data={data} />
      </li>
    );
  } else if (type === "radio") {
    return (
      <li>
        <input type="radio" name="list" id={section} className="radio" />
        <label for={section} className="radio-label">
          <div className="teams">
            {section}
            <br />
            {name}
          </div>
        </label>
        <UnorderedList data={data} />
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
