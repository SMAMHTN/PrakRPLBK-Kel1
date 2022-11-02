import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const InputComponent = () => {
  const [input, setInput] = useState('');
  const user = useContext(UserContext);

  return (
    <>
      <h2>Welcome {user.name}</h2>
      <label htmlFor='input'>Input:</label>
      <input
        type='text'
        id='input'
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input}</p>
    </>
  );
};

export default InputComponent;
