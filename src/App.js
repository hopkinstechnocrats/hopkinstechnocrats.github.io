import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';
import Textbox from './components/Textbox';
import Checkbox from './components/Checkbox';
import CounterInput from './components/CounterInput';

function App() {
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
      const response = await fetch("https://script.google.com/macros/s/AKfycbx3ZYTi5jUAO8dT306vKyfgvkELwZhskgV_Org0YG7RM1lNgk-FKPEdEckuCroiBHfO-A/exec", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result.result === "success") {
        alert("Data submitted to Google Sheets!");
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Error submitting.");
    }
  };

  const qrValue = `${formData.name} \t ${formData.comment} \t ${formData.agreed} \t ${formData.quantity}`;

  return (
    <div className="App">
      <h1>Autonomous</h1>

      <div className="input-group">
        <Textbox
          label="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
      </div>

      <div className="input-group">
        <Textbox
          label="Comment"
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
        />
      </div>

      <div className="input-group">
        <Checkbox
          label="Agree to Terms"
          checked={formData.agreed}
          onChange={(e) =>
            setFormData({ ...formData, agreed: e.target.checked })
          }
        />
      </div>

      <div className="input-group">
        <CounterInput
          value={formData.quantity}
          setValue={(value) =>
            setFormData({ ...formData, quantity: value })
          }
        />
      </div>

      <div className="qr-code">
        <QRCode value={qrValue} />
      </div>

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
