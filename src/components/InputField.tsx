import "./styles.css";

const InputField = () => {
  return (
    <div>
      <form className='input'>
        <input type='input' className='input__box' placeholder='Enter a task' />
        <button type='submit' className='input_submit'>
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
