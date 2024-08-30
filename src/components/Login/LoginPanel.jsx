import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import InputComponent from '../../UI/InputComponent'
import ToggleButton from '../../UI/ToggleButton'

const LoginPanel = () => {
   const [data, setData] = useState([])
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("");
   const [remember, setRemember] = useState(false);

   useEffect(() => {
      setData([email, password, remember]);
   }, [email, password, remember])

   const emailHandler = (email) => {
      setEmail(email)
   }

   const passwordHandler = (password) => {
     setPassword(password.trim());
   };

   const rememberHandler = (rem) => {
      setRemember(rem)
   }

   const formHandler = (event) => {
      event.preventDefault()
      alert(data)
   }

  return (
    <form
      onSubmit={formHandler}
      className="p-6 md:p-8 rounded-lg bg-white w-full"
    >
      <InputComponent
        name="Email Address"
        holder="Email Address"
        type="text"
        onChange={emailHandler}
      />
      <InputComponent
        name="Password"
        holder="Password"
        type="password"
        onChange={passwordHandler}
      />
      <span className="flex items-center justify-between my-4">
        <span className="flex items-center gap-2">
          <ToggleButton onChange={rememberHandler} />
          <p className="text-sm text-[#4C689E]">Remember Me</p>
        </span>
        <Link to="/">
          <p className="text-sm text-[#EE5D50]">Recover Password</p>
        </Link>
      </span>
      <button type="submit" className="w-full p-2 rounded bg-[#4169E1] text-white">
        Log In
      </button>
    </form>
  );
}

export default LoginPanel