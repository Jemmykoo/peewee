import { useState } from "react";

import Navigation from "./Components/Navigation";
import Page from "./Components/Page";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <Navigation />
      <Page
        fname={fname}
        setFname={setFname}
        lname={lname}
        setLname={setLname}
        age={age}
        setAge={setAge}
      />
    </div>
  );
}

export default App;
