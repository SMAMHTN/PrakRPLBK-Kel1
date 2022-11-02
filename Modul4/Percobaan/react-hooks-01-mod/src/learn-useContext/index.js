import { useRef, useContext } from 'react';
import UserContext from '../context/UserContext';

export default function Context() {
  const inputName = useRef();
  const { name, setName } = useContext(UserContext);

  const changeName = () => setName(inputName.current.value);
  return (
    <>
      <h2>Welcome {name}</h2>
      <label htmlFor='name'>Nama :</label>
      <input type='text' ref={inputName} />
      <button onClick={changeName}>Submit</button>
    </>
  );
}
