import React, { useContext } from 'react';
import QRCode from 'react-qr-code';
import FormContext from './FormContext';

export default function QRScreen() {
  const { formData } = useContext(FormContext);

  if (!formData) {
    return <div>Loading...</div>
  }

  const qrValue = `${formData.name} \t ${formData.comment} \t ${formData.agreed} \t ${formData.quantity}`;
  return (
    <div>
      <h1>QR Code</h1>
      <QRCode value={qrValue} />
    </div>
  );
}
