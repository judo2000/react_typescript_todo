import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div>
      <form className='input' onSubmit={handleAdd}>
        <input
          type='input'
          className='input__box'
          placeholder='Enter a task'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type='submit' className='input_submit'>
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
