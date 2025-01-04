/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "../InputComp";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { FallingLines } from "react-loader-spinner";
import { motion } from "framer-motion";
import { sendMessageToMe } from "@/service/contactMeService";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
};

const ContactUsForm = () => {
  const [message, setMessage] = useState<string>("");
  const [msgError, setMsgError] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!message) {
      setMsgError("Please enter some message");
      return;
    }
    if (message.length > 350) {
      setMsgError("Message should not exceed 350 characters");
      return;
    }

    const modifiedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      company: data.company,
      email: data.email,
      message,
    };

    setIsLoading(true);

    try {
      await sendMessageToMe(modifiedData);

      reset({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
      });
      setMessage("");
      setIsLoading(false);
      toastSuccess(
        "Message sent successfully!",
        <FaRegCircleCheck className="text-purple-1 w-[2.2rem] h-[2.2rem]" />
      );
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      toastError(
        "Something went wrong, Please try again!",
        <LuBadgeAlert className="text-red w-[2.2rem] h-[2.2rem]" />
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="w-[70rem] lg:mt-[4.5rem] lg:w-[80%] xmd:w-[90%] md:w-full bg-[#0E0A1D] border border-[#1D2134] rounded-[1.6rem] px-[3.2rem] sm:px-[2rem] py-[4.7rem]"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex smd:flex-col justify-between">
          <InputComponent
            placeholder={"Enter your first name"}
            type={"text"}
            register={register}
            error={errors}
            name={"firstName"}
            label="First Name"
            pl="pl-[1.5rem]"
            containerWidth="w-[48%] smd:w-full"
            validation={registrationOption.firstName}
            // autoFocus={true}
          />
          <InputComponent
            placeholder={"Enter your last name"}
            type={"text"}
            register={register}
            error={errors}
            name={"lastName"}
            label="Last Name"
            pl="pl-[1.5rem]"
            containerWidth="w-[48%] smd:w-full"
            validation={registrationOption.lastName}
          />
        </div>
        <InputComponent
          placeholder={"Enter your email"}
          type={"email"}
          register={register}
          error={errors}
          name={"email"}
          label="Email Address"
          pl="pl-[1.5rem]"
          containerWidth="w-full"
          validation={registrationOption.email}
        />
        <InputComponent
          placeholder={"Enter your company name"}
          type={"text"}
          register={register}
          error={errors}
          name={"company"}
          pl="pl-[1.5rem]"
          label="Company"
          containerWidth="w-full"
          validation={registrationOption.company}
        />
        <div className="flex flex-col w-full">
          <label className="mb-[0.5rem] text-white-1">Message</label>
          <textarea
            rows={8}
            maxLength={150}
            required
            value={message}
            placeholder="Enter your message..."
            onChange={(e: any) => {
              setMessage(e.target.value);
            }}
            className=" border-[#231E37] text-grey-5 border rounded-md focus:ring-0 focus:outline-none bg-[#130A2A] resize-none outline-none ring-0 p-[1rem] placeholder:text-[#3d345f] "
          />
          <small>{msgError}</small>
        </div>
        <button
          type="submit"
          className="mt-[5rem] smd:w-full flex items-center justify-center mx-auto py-[1.6rem] px-[4.6rem] text-center  font-medium rounded-[0.8rem]  uppercase bg-purple-2 w-auto hover:bg-purple-1 ease-in transition-all duration-150 text-white-1 font-dmsans"
        >
          {loading ? (
            <FallingLines color="#ffffff" width="30" visible={true} />
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactUsForm;
