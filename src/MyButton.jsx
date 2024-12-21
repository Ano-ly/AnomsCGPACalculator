import { useState } from 'react';

function MyButton() {
  const [status, changeStatus] = useState("Not clicked");
  const show = () => {
    if (status !== "clicked") {
      changeStatus("clicked");
    } else {
      changeStatus("Not clicked");
    }
  };
  return <button className="button1" onClick={show}>{status}</button>;
}

export default MyButton;