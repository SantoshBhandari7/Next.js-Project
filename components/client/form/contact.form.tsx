"use client";
import createContact from "@/api/contact.api";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import ContactSchema from "@/schema/contact.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {
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
    resolver: yupResolver(ContactSchema),
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        register={register}
        name="name"
        id="name"
        type="text"
        required
        label="Name"
        placeholder="Enter your name"
        error={errors?.name?.message}
      />

      <Input
        register={register}
        id="email"
        type="email"
        label="Email"
        required
        placeholder="enter your email"
        name="email"
        error={errors?.email?.message}
      />
      <Input
        register={register}
        name="message"
        id="message"
        type="text"
        required
        label="Message"
        placeholder="Enter message that you want to send"
        error={errors?.message?.message}
      />
      <Input
        register={register}
        name="subject"
        id="subject"
        type="text"
        required
        label="Subject"
        placeholder="Enter subject about your feedback"
        error={errors?.subject?.message}
      />
      <div className="mt-2">
        <Button type="submit" label="Send Message" />
      </div>
    </form>
  );
};
export default ContactForm;
