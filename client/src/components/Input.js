const Input = ({ labelText, type, name, value, handleChange, id }) => {
  return (
    <div className='single-input invoice-input'>
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => (id ? handleChange(e, id) : handleChange(e))}
        className='input'
      />
    </div>
  );
};

export default Input;
