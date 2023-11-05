import { AvatarFallback } from '@radix-ui/react-avatar'
import { User } from 'next-auth'
import Image from 'next/image'

import React from 'react'
import { Avatar } from './ui/avatar'


type Props={
    user:Pick<User,'name'|'image'>
}

const UserAvatar = ({user}: Props) => {
    return (
        <Avatar>
            {user.image?(
                <div className='relative w-full h-full aspect-square'>
                    <Image
                    src={user.image}
                    fill
                    alt="profile"
                    />
                </div>
            ):(
                <AvatarFallback>
                   <span className='sr-only'></span>
                </AvatarFallback>
            )
            }
        </Avatar>
    )
}

export default UserAvatar
