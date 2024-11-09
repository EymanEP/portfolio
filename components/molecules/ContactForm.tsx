"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  CheckIcon,
  Cross2Icon,
  EnvelopeClosedIcon,
  PaperPlaneIcon,
  Pencil1Icon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { twMerge } from "tailwind-merge";

type FormStateType = "notSent" | "sending" | "success" | "error";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const t = useTranslations("thecontact.form");
  const [formState, setFormState] = useState<FormStateType>("notSent");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data, e) => {
    e?.preventDefault();
    const { name, email, subject, message } = data;
    setFormState("sending");
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setFormState("success");
      reset();
      setTimeout(() => setFormState("notSent"), 4000);
    } catch (error) {
      console.log(error);
      setFormState("error");
    }
  };

  let buttonBg = "";
  switch (formState) {
    case "notSent":
      buttonBg = "bg-black dark:bg-white";
      break;
    case "sending":
      buttonBg = "bg-black dark:bg-white";
      break;
    case "success":
      buttonBg = "bg-green-400 dark:bg-green-500";
      break;
    case "error":
      buttonBg = "bg-red-400 dark:bg-red-500";
      break;
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete={"off"}
      className="shadow-md p-5 rounded-md font-geistMono tracking-tighter flex flex-col gap-4 dark:bg-[#111D]"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <span className="relative flex items-center">
            <Input
              type="text"
              {...register("name", {
                required: { value: true, message: t("errorname") },
                maxLength: {
                  value: 30,
                  message: t("lengthname"),
                },
              })}
              name="name"
              placeholder={t("name")}
            />
            <PersonIcon className="absolute right-2" />
          </span>
          <div className="flex flex-row justify-between">
            <p className="text-xs text-stone-500">{t("required")}</p>
            {errors.name && (
              <span className="text-xs text-red-800 dark:text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <span className="relative flex items-center">
            <Input
              type="email"
              {...register("email", {
                required: { value: true, message: t("erroremail") },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: t("invalidemail"),
                },
              })}
              name="email"
              placeholder={t("email")}
            />
            <EnvelopeClosedIcon className="absolute right-2" />
          </span>
          <div className="flex flex-row justify-between">
            <p className="text-xs text-stone-500">{t("required")}</p>
            {errors.email && (
              <span className="text-xs text-red-800 dark:text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <span className="relative flex items-center">
            <Input
              type="text"
              {...register("subject", {
                required: { value: true, message: t("errorsubject") },
              })}
              name="subject"
              placeholder={t("subject")}
            />
            <Pencil1Icon className="absolute right-2" />
          </span>
          <div className="flex flex-row justify-between">
            <p className="text-xs text-stone-500">{t("required")}</p>
            {errors.subject && (
              <span className="text-xs text-red-800 dark:text-red-600">
                {errors.subject.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <Textarea
            rows={3}
            {...register("message", {
              required: { value: true, message: t("errormessage") },
            })}
            name="message"
            placeholder={t("message")}
          />
          <div className="flex flex-row justify-between">
            <p className="text-xs text-stone-500">{t("required")}</p>
            {errors.message && (
              <span className="text-xs text-red-800 dark:text-red-600">
                {errors.message.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <Button
            className={twMerge(
              "w-full lg:w-fit overflow-hidden transition-colors duration-200",
              buttonBg,
            )}
            type="submit"
            disabled={formState === "sending"}
          >
            {formState === "notSent" && (
              <span className="flex flex-row items-center gap-2">
                {t("send")} <PaperPlaneIcon />
              </span>
            )}
            {formState === "sending" && (
              <p className="animate-pulse">{t("sending")}</p>
            )}
            {formState === "success" && (
              <span className="flex flex-row items-center gap-2">
                {t("success")} <CheckIcon />
              </span>
            )}
            {formState === "error" && (
              <span className="flex flex-row items-center gap-2">
                {t("error")} <Cross2Icon />
              </span>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
