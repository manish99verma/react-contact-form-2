import "./InputField.css";

const InputField = ({ label, id, placeHolder, type, value, onChange }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={placeHolder}
        type={type}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
