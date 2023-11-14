"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { quizSchema } from "@/schemas/quiz";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookOpen, BookOpenCheck, CopyCheck } from "lucide-react";
import { Separator } from "./ui/separator";

interface Props {}
type Input = z.infer<typeof quizSchema>;

const QuizCreation = (props: Props) => {
  const form = useForm<Input>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      topic: "",
      type: "open_ended",
      amount: 3,
    },
  });
  function onSubmit(input: Input) {
    alert(JSON.stringify(input, null, 2));
  }
  form.watch();
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle className="font-bold ">Quiz Creation🪄</CardTitle>
          <CardDescription>Choose a topic!</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Why not try and test your knowledge by taking a quick quiz on any
            topic you want!
          </p>
        </CardContent>
        
        <CardContent>
          {/* from field for topic*/}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>TOPIC</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a topic..." {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the topic.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* from field for amount*/}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NO OF QUESTIONS</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter an amount..."
                        {...field}
                        type="number"
                        min={1}
                        max={10}
                        onChange={(e) => {
                          form.setValue("amount", parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the number of questions in the quiz
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button className="w-1/2 rounded-none rounded-l-lg"
                type='button'
                onClick={()=>{
                  form.setValue('type','mcq');
                }}
                  variant={form.getValues('type')==='mcq'?'default':'secondary'}
                > 
                  <CopyCheck className="w-4 h-4 mr-2"/> MCQ
                </Button>
                <Separator orientation="vertical"/>

                <Button className="w-1/2 rounded-none rounded-r-lg"
                type='button'
                onClick={()=>{
                  form.setValue('type','open_ended');
                }}
                  variant={form.getValues('type')==='open_ended'?'default':'secondary'}
                >
                  <BookOpenCheck className="w-4 h-4 mr-2"/>Open Ended
                </Button>
              </div>
              <div className="flex justify-center">
              <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizCreation;
