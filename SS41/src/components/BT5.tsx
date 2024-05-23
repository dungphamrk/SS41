import React from 'react'

export default function BT5() {
  return (
    <div>
        <div className='border-8 border-cyan-200 bg-cyan-300 w-48 h-32 relative '>
            <p className='text-blue-600 absolute left-4'>Relative parents</p>
            <button className='text-white rounded-xl bg-blue-700 h-12 w-32 absolute bottom-0 left-0'>Absolute child</button>
        </div>
    </div>
  )
}
