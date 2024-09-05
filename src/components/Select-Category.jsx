import React from 'react'

const SelectCategory = () => {
  return (
    <div className=' p-5 pt-10 pb-5  bg-white '>
        <h1 className=' text-center text-green-600 text-2xl py-5'>Select Category</h1>
        <div className=' justify-between items-center flex gap-5'>
            <div className=' border-green-500 border-2 px-4 py-2'>Health</div>
            <div className=' border-green-500 border-2 px-4 py-2' >Natural Personal Care</div>
            <div className=' border-green-500 border-2 px-4 py-2'> Medicine</div>
            <div className=' border-green-500 border-2 px-4 py-2' >Nutraceuticals</div>
            <div className=' border-green-500 border-2 px-4 py-2'>Paridhan</div>
            <div className=' border-green-500 border-2 px-4 py-2'>Publications</div>
        </div>
    </div>
  )
}

export default SelectCategory