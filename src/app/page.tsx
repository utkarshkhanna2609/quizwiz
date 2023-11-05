import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



export default async function Home() {
  const session=await getServerSession();
  if(session?.user){
    return redirect("/dashboard");
  }
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle className="font-bold ">Quizwiz🚀</CardTitle>
          <CardDescription>Your personal quiz taking wizard!🪄</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Why not try and test your knowledge by taking a quick quiz on any topic you want!</p>
        </CardContent>
        <CardFooter>
          <p>Sign in and start now! <br/>It's absolutely free!</p>
        </CardFooter>
        <CardContent className="flex justify-center">
        <SignInButton text="Sign in now!" ></SignInButton>
        </CardContent>
      </Card>
    </div>
  );
}
