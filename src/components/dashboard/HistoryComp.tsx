'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, 
} from '../ui/card'
import {History} from 'lucide-react';

interface Props {
    
}

const HistoryComp = (props: Props) => {
    const router=useRouter();
    return (
        <Card className='hover:cursor-pointer hover:opacity-75 col-span-4'
        onClick={()=>{
            router.push('/history');
        }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">View past attempts</CardTitle>
       <History size={28} strokeWidth={2.5}/>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Check your past performance!
        </p>
      </CardContent>
            
        </Card>
    )
}

export default HistoryComp;
