import Main from "./components/Main";
import "./App.css";
import AddForm from "./components/AddForm";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="App">
      <Main items={items} />
      <AddForm handleAddItem={addItem} />
    </div>
  );
}

export default App;
