export const getField = ({ name, value, handleChange }) => {
  switch (name) {
    case 'name':
      return <InputField name={name} value={value} handleChange={handleChange} />;
    case 'message':
      return <MessageField name={name} value={value} handleChange={handleChange} />;
    default:
      return <InputField name={name} value={value} handleChange={handleChange} />;
  }
};

export const InputField = ({ name, value, handleChange }) => (
  <div className="form_input">
    <input
      id={name}
      type={name === 'email' ? name : 'text'}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export const MessageField = ({ name, value, handleChange }) => (
  <div className="form_input">
    <textarea id={name} value={value} onChange={handleChange} required />
  </div>
);
