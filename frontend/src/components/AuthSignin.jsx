
import React from 'react'
import { Button } from './ui/button'

const AuthSignin = () => {
  return (
    <div>

    
      
      <Input
              label="email"
              placeholder="mohitsingh@gmail.com"
              onChange={(e) => {
                // setPostInputs({
                //   ...postInputs,
                //   email: e.target.value,
                // });
                console.log("clicked")
              }}
            />
    </div>
  )
}

export default AuthSignin




function Input({
  label,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <div>
        <label className="block mb-2 text-sm  text-black font-semibold pt-4 px-2">
          {label}
        </label>
        <input
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}