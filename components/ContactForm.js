import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { siteConfig } from "@/config/site.config";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (formData) => {
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `From: ${formData.name} <${formData.email}>\n\n${formData.message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-white/50 p-[2rem] rounded-xl dark:bg-zinc-500/50 flex flex-col items-center justify-center space-y-4 text-center">
        <p className="text-lg font-semibold dark:text-white">
          Your email client should have opened!
        </p>
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          If it didn&apos;t, email me directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="underline text-[#86906F] dark:text-[#a1b378]"
          >
            {siteConfig.email}
          </a>
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="border border-[#86906F] py-2 px-5 rounded-full text-black font-semibold hover:bg-[#86906F] dark:border-[#a1b378] dark:hover:bg-[#a1b378] hover:text-white transition-all ease-linear duration-200 dark:text-white"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/50 p-[2rem] rounded-xl dark:bg-zinc-500/50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col space-y-3 lg:space-y-5 "
      >
        <input
          {...register("name")}
          placeholder="Name"
          className="contactInput"
          type="text"
          name="name"
          autoComplete="name"
          required
        />
        <input
          {...register("email")}
          placeholder="Your email"
          className="contactInput"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
          name="subject"
          required
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
          name="message"
          rows={4}
          required
        />
        <div className="flex items-end justify-end pt-4">
          <button
            type="submit"
            className="border border-[#86906F] py-2 px-5 rounded-full text-black font-semibold hover:bg-[#86906F] dark:border-[#a1b378] dark:hover:bg-[#a1b378] hover:text-white transition-all ease-linear duration-200 dark:text-white"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
