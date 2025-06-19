import React from 'react';

const TextBox = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  ...props
}) => {
  return (
    <div style={{ margin: '1em 0' }}>
      {label && <label style={{ display: 'block', marginBottom: '0.5em' }}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        style={{
          padding: '0.5em',
          fontSize: '1em',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '100%'
        }}
      />
    </div>
  );
};

export default CustomInput;