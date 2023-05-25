import React from 'react'

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe
}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-3'>
        <label
          htmlFor={name}
          className='text-gray-800 text-sm font-medium w-28'
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='text-blue-500 text-sm font-medium'
          >
            Surprise Me
          </button>
        )}
        <div>
          <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3'
          />
        </div>
      </div>
    </div>
  )
}

export default FormField
