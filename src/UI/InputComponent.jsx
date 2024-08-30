import React, {useState, useRef} from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const InputComponent = (props) => {
   const [showPassword, setShowPassword] = useState(false)
   const inputType = props.type === "password" && showPassword ? "text" : props.type;
   const inputRef = useRef()

  return (
    <div className="flex flex-col gap-1 mb-2">
      <p className="text-[#4C689E] text-sm">{props.name}</p>
      <span className="rounded border p-2 flex items-center">
        <input
          type={inputType}
          placeholder={props.holder}
          className="text-sm w-full outline-none placeholder:text-[#869DCB]"
          ref={inputRef}
          onChange={() => props.onChange(inputRef.current.value.trim())}
        />
        {props.type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-[#4169E1]"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        )}
      </span>
    </div>
  );
}

export default InputComponent