import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

const InputComponent = () => {
  const [input, setInput] = useState("");
  const user = useContext(UserContext);

  return (
    <>
      <Container>
        <Stack gap={3}>
          <h2 style={{ textAlign: "center" }}>Welcome {user.name}</h2>
          <Row>
            <Form.Control
              type="text"
              id="input"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Input Your Name"
              autoComplete="off"
            />
          </Row>
          <Row>
            <p>{input}</p>
          </Row>
        </Stack>
      </Container>
    </>
  );
};

export default InputComponent;
