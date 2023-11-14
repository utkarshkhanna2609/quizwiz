import {z} from 'zod';

export const quizSchema=z.object({
    topic: z.string().min(4,{message:'Topic must be at least 4 character long!'}).max(50, {message:'Topic should not exceed 50 characters in length!'}),
    type: z.enum(['mcq','open_ended']),
    amount: z.number().min(1).max(10),
})