import { useState } from "react";

import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <AddTask />
    </div>
  );
}

export default App;
