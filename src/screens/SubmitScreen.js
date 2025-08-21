import React, { useContext } from 'react';
import Textbox from '../components/Textbox';
import Checkbox from '../components/Checkbox';
import CounterInput from '../components/CounterInput';
import FormContext from './FormContext';

export default function SubmitScreen() {
  const { formData, setFormData } = useContext(FormContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      comment: formData.comment,
      agreed: formData.agreed,
      quantity: formData.quantity,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx3ZYTi5jUAO8dT306vKyfgvkELwZhskgV_Org0YG7RM1lNgk-FKPEdEckuCroiBHfO-A/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      alert("Submitted!");

      // OPTIONAL: clear after submit (comment out if you want it to stay)
      // setFormData({ name: '', comment: '', agreed: false, quantity: 0 });
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting.");
    }
  };
  const handleClear = () => {
    setFormData({
      name: '',
      comment: '',
      agreed: false,
      quantity: 0,
    });
  };

  // tiny helper for cleaner onChange handlers
  const update = (patch) => setFormData((prev) => ({ ...prev, ...patch }));

  return (
    <div>
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <Textbox
          label="Name"
          value={formData.name}
          onChange={(e) => update({ name: e.target.value })}
        />
        <Textbox
          label="Comment"
          value={formData.comment}
          onChange={(e) => update({ comment: e.target.value })}
        />
        <Checkbox
          label="Agree to Terms"
          checked={formData.agreed}
          onChange={(e) => update({ agreed: e.target.checked })}
        />
        <CounterInput
          value={formData.quantity}
          setValue={(value) => update({ quantity: value })}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear} style={{marginLeft: "40px"}}>

        </button>
      </form>
    </div>
  );
}
