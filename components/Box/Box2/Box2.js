import React from 'react'

export default function Box2({title:title, thumb:thumb, des:des, type:type, tags:tags}) {
  return (
    <div className='flex justify-center items-center'>
     <div className='flex m-2 bg-neutral-50 p-1 w-3/4 border-2 border-black'>
     <div className='w-1/3'>
        <div className='border-2 border-b-gray-800 item-center justify-center flex bg-orange-600 img w-full h-64'></div>
      </div>
        <div className='w-2/3'>
        <div className='mx-2 my-2'>
        <div className='item-center justify-center text-left'>
          <p className='font-bold text-lg'>{title}</p>
          <p className='font-thin text-sm'>{type}</p>
          <div class="bg-fixed">
                  <p class="font-thin text-[16px] text-slate-400">{des}</p>  
          </div>
        </div>
        <div className='item-center justify-center mt-4'>
        <p className='text-sm font-mono text-right'>{tags}</p>
        </div>
        </div>
        </div>
      </div>
      </div>
  )
}
