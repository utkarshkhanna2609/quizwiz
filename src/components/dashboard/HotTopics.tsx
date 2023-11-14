import WordCloud from '@/app/dashboard/WordCloud';
import React from 'react'
import { Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle, } from '../ui/card'
import {BookMarked} from 'lucide-react';
interface Props {
    
}

const HotTopics = (props: Props) => {
    return (
        <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        
        <BookMarked size={28} strokeWidth={2.5}/>
      </CardHeader>

      <CardContent className="pl-2">
        <div>
       <WordCloud/>

        </div>
      </CardContent>
    </Card>
    )
}

export default HotTopics;
