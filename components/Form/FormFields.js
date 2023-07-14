import Select from '@/components/Form/Select';
import React from 'react';

export const getField = ({ name, value, handleChange, onSelect, selectOptions }) => {
  switch (name) {
    case 'name':
      return <InputField name={name} value={value} handleChange={handleChange} />;
    case 'message':
      return <MessageField name={name} value={value} handleChange={handleChange} />;
    case 'topic':
      return (
        <Select
          name={name}
          options={selectOptions}
          onSelect={onSelect}
          placeholder="Business and partnership"
          selected={value || selectOptions[0]}
        />
      );
    default:
      return (
        <InputField
          name={name}
          value={value}
          handleChange={handleChange}
          required={name === 'email'}
        />
      );
  }
};

export const InputField = ({ name, value, handleChange, required }) => (
  <div className="form_input">
    <input
      id={name}
      type={name === 'email' ? name : 'text'}
      value={value}
      onChange={handleChange}
      required={required}
    />
  </div>
);

export const MessageField = ({ name, value, handleChange }) => (
  <div className="form_input">
    <textarea id={name} value={value} onChange={handleChange} />
  </div>
);
