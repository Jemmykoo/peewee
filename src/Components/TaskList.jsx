import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function TaskList(props) {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <div className="m-3">
      <Form.Group className="m-3 d-flex" controlId="formBasicCheckbox">
        <Form.Check
          className="m-3"
          type="checkbox"
          onChange={() => {
            checked === true ? setChecked(false) : setChecked(true);
          }}
        />
        <Form.Label className="d-flex align-items-center">
          {props.task}
        </Form.Label>
      </Form.Group>
    </div>
  );
}
export default TaskList;
