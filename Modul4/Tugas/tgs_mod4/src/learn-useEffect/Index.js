import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [isMount, setIsMount] = useState(false);
  const { name } = useContext(UserContext);

  // setIsMount to true when mounting
  useEffect(() => {
    setIsMount(true);
  }, []);

  // timer
  useEffect(() => {
    const interval =
      isMount && setInterval(() => setCount((prev) => prev + 1), 1000);

    return () => {
      clearInterval(interval);
      setCount(0);
    };
  }, [isMount]);

  useEffect(() => console.log(isMount), [isMount]);

  return (
    <>
      <Container>
        <Stack gap={3}>
          <h2 style={{ textAlign: "center" }}>Welcome {name}</h2>
          <Row>
            <div style={{ textAlign: "center" }}>
              <h2>Timer</h2>
              {isMount && <div>{count}</div>}
            </div>
          </Row>
          <Row></Row>
        </Stack>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="secondary"
              onClick={() => setIsMount((prev) => !prev)}
            >
              Toggle mount
            </Button>
          </div>
      </Container>
    </>
  );
}
