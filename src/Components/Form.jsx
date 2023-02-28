import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../Context/GlobalContext";

function Form() {
  const [text, setText] = useState("");
  const {save,edit,update}=useContext(GlobalContext)
const handleSubmit=(e)=>{
    e.preventDefault();
    if(edit.isEdit){
      update(edit.todo.id,text)
    }else{
      save(text);
    }
    setText("")
}
useEffect(()=>{
  setText(edit.todo.text)
},[edit])
  return (
    <form className="container mt-4" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <input
          type="text"
          required
          value={text}
          className="form-control custom-padding"
          placeholder="Enter your Title"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 custom-padding">
        Submit
      </button>
    </form>
  );
}

export default Form;
