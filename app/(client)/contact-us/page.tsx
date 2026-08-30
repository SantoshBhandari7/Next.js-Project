"use client";
import createContact from "@/api/contact.api";
import Input from "@/components/common/ui/input";
import { TLogin } from "@/types/auth.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { useFormState } from "react-hook-form";

const ContactPage = () => {
  //   return (
  //     <main>
  //       <section>
  //         <h1>Here is our Information</h1>
  //       </section>
  //     </main>
  //   )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
    mode: "all",
  });

  const { mutate, isPending, data } = useMutation({
    mutationFn: createContact,
    onSuccess: (response) => {
      toast.success(response?.message ?? "Message Sent successfully");
    },
    onError: (error) => {
      toast.error(error?.message ?? "Failed to sent");
    },
  });

  const onSubmit = (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    console.log("message submitted", data);
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <Input
        register={register}
        name="name"
        id="name"
        type="text"
        required
        label="Name"
        placeholder="Enter your name"
      />

      <Input
        register={register}
        id="email"
        type="email"
        label="Email"
        required
        placeholder="enter your email"
        name="email"
      />
      <Input
        register={register}
        name="message"
        id="message"
        type="text"
        required
        label="Message"
        placeholder="Enter message that you want to send"
      />
      <Input
        register={register}
        name="subject"
        id="subject"
        type="text"
        required
        label="Subject"
        placeholder="Enter subject about your feedback"
      />
    </form>
  );
};
export default ContactPage;
