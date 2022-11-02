import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

const AgeComponent = () => {
  const ageRef = useRef();
  const [input, setInput] = useState("");
  useEffect(() => {
    ageRef.current.focus();
  }, []);
  return (
    <>
      <Container>
        <Stack gap={3}>
          <h2 style={{ textAlign: "center" }}>Type Your Age</h2>
          <Row>
            <Form.Control
              type="number"
              name="age"
              id="age"
              ref={ageRef}
              onBlur={() => setInput(ageRef.current.value)}
            />
          </Row>
          <Row style={{ textAlign: "center" }}>{!!input && <h5>Umur anda: {input} tahun</h5>}</Row>
        </Stack>
      </Container>
    </>
  );
};

export default AgeComponent;
