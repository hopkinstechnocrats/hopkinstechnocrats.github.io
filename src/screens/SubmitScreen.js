import React, { useState } from 'react';
import Textbox from '../components/Textbox';
import Checkbox from '../components/Checkbox';
import CounterInput from '../components/CounterInput';

export default function SubmitScreen() {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    agreed: false,
    quantity: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
        name: formData.name,
        comment: formData.comment,
        agreed: formData.agreed,
        quantity: formData.quantity,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbx3ZYTi5jUAO8dT306vKyfgvkELwZhskgV_Org0YG7RM1lNgk-FKPEdEckuCroiBHfO-A/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      alert("Submitted!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting.");
    }
  };

  return (
    <div>
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <Textbox
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Textbox
          label="Comment"
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
        />
        <Checkbox
          label="Agree to Terms"
          checked={formData.agreed}
          onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
        />
        <CounterInput
          value={formData.quantity}
          setValue={(value) => setFormData({ ...formData, quantity: value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

