import React, { useState } from "react";

const EventEx = () => {

  const [Email, setEmail] = useState("")

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  return (
    <div>
      <input onChange = {onChangeEmail} type = "email"/>
    </div>
  );
};

export default EventEx;