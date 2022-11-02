import { useEffect, useRef, useState } from 'react';

const AgeComponent = () => {
  const ageRef = useRef();
  const [input, setInput] = useState('');
  useEffect(() => {
    ageRef.current.focus();
  }, []);
  return (
    <>
      <label htmlFor='age'>Type your age</label>
      <input
        type='number'
        name='age'
        id='age'
        ref={ageRef}
        onBlur={() => setInput(ageRef.current.value)}
      />
      {!!input && <h5>Umur anda: {input} tahun</h5>}
    </>
  );
};

export default AgeComponent;
