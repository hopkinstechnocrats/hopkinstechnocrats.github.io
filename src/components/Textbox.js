import React from 'react';
export default function Textbox({ label, value, onChange, placeholder }){
  return (
    <label>
    {label}
    <input
    type="text"
    value={value}
    onChange={onChange}
    />
    </label>
    );
  }