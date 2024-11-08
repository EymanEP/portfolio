"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {EnvelopeClosedIcon, PaperPlaneIcon, PersonIcon, Pencil1Icon} from "@radix-ui/react-icons";
import {useTranslations} from "next-intl";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const t = useTranslations("thecontact.form")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data, e) => {
    e?.preventDefault();
    const { name, email, subject, message } = data;
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Subject: ", subject);
    console.log("Message: ", message);

    reset();
  };

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
          <Button className="w-full lg:w-fit" type="submit">
            {t("send")} <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </form>
  );
}
