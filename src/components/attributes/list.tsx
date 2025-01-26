import useAttributes from "../../hooks/useAttributes";
import Item from "./item";

function List() {
  const { attributes } = useAttributes();
  return (
    <section className="App-section">
      <h2>Attributes</h2>
      {attributes.map((attribute) => (
        <Item key={attribute.id} attribute={attribute} />
      ))}
    </section>
  );
}

export default List;
