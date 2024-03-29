import React from 'react'

const Spinner = () => {
  return (
    <div className='flex items-center w-full justify-center'>
        <div className='w-12 h-12 border-4 border-red-400 rounded-full animate-spin border-t-transparent'>
        </div>
    </div>
  )
}

export default Spinner