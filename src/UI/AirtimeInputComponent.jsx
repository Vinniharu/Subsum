import React from 'react'

const AirtimeInputComponent = (props) => {
  return (
    <span className="">
      <p>{props.name}</p>
      <span className="border-2 rounded p-2 border-[#C7DBEF] bg-[#FFFFFF] ">
        <input
          type="number"
          value={props.value}
          onChange={props.onChange}
          className='outline-none'
        />
      </span>
    </span>
  );
}

export default AirtimeInputComponent