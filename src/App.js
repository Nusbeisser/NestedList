import "./App.scss";
import tree from "./data.json";
import UnorderedList from "./UnorderedList";

function App() {
  return (
    <div id="ListContainer">
      <UnorderedList
        data={tree.data}
        name={tree.name}
        section={tree.section}
        type={tree.type}
      />
    </div>
  );
}

export default App;
