import { useState } from "react";

//Custom componentes
import CustomForm from "./components/CustomForm";

function App() {
  const [count, setCount] = useState(0);

  const addTask = (task) => {
    console.log(task);
  };

  return (
    <div className="container">
      <header>My Task List</header>
      <CustomForm addTask={addTask} />
    </div>
  );
}

export default App;
