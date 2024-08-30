import React, {useState, useEffect} from 'react'
import InputComponent from '../../UI/InputComponent'

const ChangePassword = () => {
   const [current, setCurrent] = useState("Stevewonder");
   const [enteredCurrent, setEnteredCurrent] = useState("");
   const [enteredNew, setEnteredNew] = useState("");
   const [enteredConfirm, setEnteredConfirm] = useState("");
   const [valid, setValid] = useState(false)

   const formHandler = (event) => {
      event.preventDefault();
      if (enteredCurrent && enteredCurrent === current && enteredNew === enteredConfirm) {
         alert("Password has been changed!!")
         setCurrent(enteredNew)
      } else{
         alert("Password not changed!!")
      }
   }

   useEffect(() => {
      if(enteredCurrent && enteredNew === enteredConfirm && enteredNew){
         setValid(true)
      } else{
         setValid(false)
      }
   }, [enteredCurrent, enteredNew, enteredConfirm])

  return (
    <form
      onSubmit={formHandler}
      className="rounded-3xl bg-white p-5 border flex flex-col gap-2"
    >
      <InputComponent
        type="text"
        name="Current Password"
        holder="Enter Current Password"
        onChange={setEnteredCurrent}
      />
      <InputComponent
        type="text"
        name="New Password"
        holder="Enter New Password"
        onChange={setEnteredNew}
      />
      <InputComponent
        type="text"
        name="Confirm New Password"
        holder="Enter New Password"
        onChange={setEnteredConfirm}
      />
      <button
        type="submit"
        className={`w-full mt-2 p-2 rounded-lg bg-[#4169E1] text-[#F7F9FD] ${
          !valid ? "opacity-40 " : ""
        }`}
        disabled={!valid}
      >
        Submit
      </button>
    </form>
  );
}

export default ChangePassword