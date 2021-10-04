import { Form, Button } from "react-bootstrap";

function Page(props) {
  const changeFname = (e) => {
    props.setFname(e.target.value);
  };
  const changeLname = (e) => {
    props.setLname(e.target.value);
  };
  const changeAge = (e) => {
    props.setAge(e.target.value);
  };

  const isDisabled = () => {
    if (
      props.fname.trim() === "" ||
      props.lname.trim() === "" ||
      props.age.trim() === ""
    ) {
      return true;
    }
    return false;
  };
  return (
    <div className="d-flex justify-content-around">
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" value={props.fname} onChange={changeFname} />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" value={props.lname} onChange={changeLname} />
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" value={props.age} onChange={changeAge} />
        <br />
        <Button
          onClick={() =>
            console.log(
              "first name is: ",
              props.fname,
              " last name is: ",
              props.lname,
              " age is: ",
              props.age
            )
          }
          disabled={isDisabled()}
        >
          Submit button
        </Button>
      </Form.Group>
    </div>
  );
}
export default Page;
