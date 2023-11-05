import {
    getServerSession,
    type NextAuthOptions,
    type DefaultSession,
  } from "next-auth";
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import { prisma } from "./db";
import GoogleProvider from "next-auth/providers/google";

declare module 'next-auth'{
    interface Session extends DefaultSession{
        user:{
            id:string
        }& DefaultSession['user']
    }
}

declare module 'next-auth/jwt'{
    interface JWT{
        id:string,
    }
}

export const authOptions:NextAuthOptions={
   session:{
       strategy:'jwt'
   },
   callbacks:{
    async jwt({ token }) {
        // Only proceed if email is a string and not null or undefined
        if (typeof token.email === 'string') {
          const db_user = await prisma.user.findUnique({
            where: {
              email:token.email,
            },
          });
          // Ensure that the user ID is a string before assigning it to the token
          if (db_user && typeof db_user.id === 'string') {
            token.id = db_user.id;
          }
        }
        return token;
      },
       session:({session, token})=>{
           if(token){
               session.user.id=token.id,
               session.user.email=token.email,
               session.user.name=token.name,
               session.user.image=token.picture
           }
           return session;
       },
   },
   secret:process.env.NEXTAUTH_SECRET,
   adapter:PrismaAdapter(prisma),
   providers:[
       GoogleProvider({
           clientId: process.env.GOOGLE_CLIENT_ID as string,
           clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
       })
    ]
};

export const getAuthSession=()=>{
    return getServerSession(authOptions);
}