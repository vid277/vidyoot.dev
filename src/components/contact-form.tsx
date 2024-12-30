"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "emailjs-com";

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
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSubscribeButton } from "./ui/animated-subscribe-button";
import { ChevronRightIcon, CheckIcon } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email is not valid.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

    const templateParams = {
      to_email: "vsenthil31@gatech.edu",
      from_name: `${data.firstname} ${data.lastname}`,
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        if (response.status === 200) {
          setIsSent(true);
        }
      });
  };

  const [isSent, setIsSent] = useState<boolean>(false);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 w-full items-start justify-start pl-0"
      >
        <div className="flex flex-row gap-4">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-black font-hanken font-bold text-xl">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Vidyoot" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-black font-hanken font-bold text-xl">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Senthil" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-black font-hanken font-bold text-xl">
                Email
              </FormLabel>
              <FormControl>
                <Input placeholder="vsenthil31@gatech.edu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-black font-hanken font-bold text-xl">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  className="font-hanken h-40"
                  placeholder="Type your message here."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isSent && (
          <div className="flex flex-row gap-4 font-hanken text-base font-semibold text-black">
            <p>Thanks for reaching out! I will get back to you as soon as possible.</p>
          </div>
        )}
        {/* Animated Subscribe Button */}
        <AnimatedSubscribeButton
          buttonColor="#000000"
          buttonTextColor="#ffffff"
          subscribeStatus={isSent}
          initialText={
            <span className="group inline-flex items-center">
              Send
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          }
          changeText={
            <span className="group inline-flex items-center ml-[-1rem]">
              <CheckIcon className="mr-2 size-4" />
              Sent
            </span>
          }
        />
      </form>
    </Form>
  );
}
