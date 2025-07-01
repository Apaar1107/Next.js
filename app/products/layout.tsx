"use client"

import { MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'


const layout = ({children}:{children:React.ReactNode}) => {

    const router = useRouter();

  return (
    <div className='flex flex-col gap-6'>
        <MoveLeft onClick={()=>router.back()} className='w-4 h-4'/>
        {children}
    </div>
  )
}

export default layout