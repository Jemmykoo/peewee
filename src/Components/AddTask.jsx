import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import TaskList from "./TaskList";

function AddTask(props) {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);
  console.log("tasklist", tasklist);
  console.log("TASKLIST LENGTH", tasklist.length);
  return (
    <>
      <Row className="m-3 align-items-end">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Add Task</Form.Label>
            <Form.Control
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={1}>
          <Button
            onClick={() => {
              setTasklist([...tasklist, task]);
            }}
          >
            Add
          </Button>
        </Col>
      </Row>
      {tasklist.length >= 1 && (
        <Row>
          {tasklist.map((item) => (
            <TaskList key={item} task={item} />
          ))}
        </Row>
      )}
    </>
  );
}
export default AddTask;
