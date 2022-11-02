import { useRef, useContext } from "react";
import UserContext from "../context/UserContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import InputGroup from "react-bootstrap/InputGroup";

export default function Context() {
  const inputName = useRef();
  const { name, setName } = useContext(UserContext);

  const changeName = () => setName(inputName.current.value);
  return (
    <>
      <Container>
        <Stack gap={3}>
          <h2 style={{ textAlign: "center" }}>Welcome {name}</h2>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              ref={inputName}
              autoComplete="off"
              placeholder="Enter Your Name"
            />
            <Button onClick={changeName} variant="primary">
              Submit
            </Button>
          </InputGroup>
        </Stack>
      </Container>
    </>
  );
}