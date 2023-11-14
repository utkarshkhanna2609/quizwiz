'use client'
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import React from 'react';
import D3WordCloud from 'react-d3-cloud';

interface Props {
    
}

const data=[
    {
        text:'hey',
        value:3,
    },
    {
        text:'ReactJS',
        value:10,
    },
    {
        text:'NodeJS',
        value:4,
    },
    {
        text:'nextJs',
        value:6,
    },
    {
        text:'MERN',
        value:2,
    },
    {
        text:'ExpressJS',
        value:1,
    },

];

const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

const WordCloud = (props: Props) => {
    const theme=useTheme();
    const router=useRouter();
    return (
        <>
        <D3WordCloud
          data={data}
          height={550}
          font="Times"
          fontSize={fontSizeMapper}
          rotate={0}
          padding={10}
          fill={theme.theme === "dark" ? "white" : "black"}
          onWordClick={(e, d) => {
            router.push("/quiz?topic=" + d.text);
          }}
        />
      </>
    )
}

export default WordCloud;
