"use client";
import Image from "next/image";
import React, { useState } from "react";
import Loader from "../../../../components/Common/Loaders/Loader";
import Link from "next/link";
import GoogleSignInButton from "@/components/Common/Buttons/google-sign-in";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { publicApi } from "@/utils/configs/axios-instance";
import { useRouter } from "next/navigation";

const page = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  // data -> firstName, lastName, email, password
  const submitForm = async (data) => {
    try {
      setLoading(true);
      await publicApi.post("/auth/register", data);
      toast.success("Account created successfully.");

      router.push("/account/login");
    } catch (e) {
      toast.error(e.response.data.error ?? "an error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: `url(/auth-bg.png)` }} className="w-full min-h-[100vh] flex items-center justify-center">
      <div className="container md:px-24 px-xPadding pt-5 pb-16 shadow-2xl max-w-2xl md:min-h-[80vh] bg-white rounded-3xl flex flex-col h-full">
        <div className="flex flex-col items-center">
          <Link href="/" className="flex justify-center w-full">
            <Image src="/logo.png" alt="" width={300} height={300} className="w-40" />
          </Link>
          <p className="text-[1.5em] font-bold">Sign Up</p>
        </div>

        <form onSubmit={handleSubmit(submitForm)} noValidate className="flex flex-col gap-4 mt-2">
          <div className="grid w-full grid-cols-2 gap-2">
            <div className="w-full">
              <label htmlFor="fname">First name</label>
              <div>
                <input
                  type="text"
                  id="fname"
                  className="w-full"
                  {...register("firstName", {
                    required: { value: true, message: "Your first name is required" },
                    min: { value: 2, message: "Your first name cannot be less than 2 characters" },
                  })}
                />
                {errors.firstName && <p className="text-sm font-semibold text-red-500">{errors.firstName.message}</p>}
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="lname">Last name</label>
              <div>
                <input
                  type="text"
                  id="lname"
                  className="w-full"
                  {...register("lastName", {
                    required: { value: true, message: "Your last name is required" },
                    minLength: { value: 2, message: "Your last name cannot be less than 2 characters" },
                  })}
                />
                {errors.lastName && <p className="text-sm font-semibold text-red-500">{errors.lastName.message}</p>}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                type="email"
                id="email"
                className="w-full rounded-xl"
                {...register("email", {
                  required: { value: true, message: "Your email address is required" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="text-sm font-semibold text-red-500">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <div>
              <input
                type="password"
                id="password"
                className="w-full rounded-xl"
                {...register("password", {
                  required: { value: true, message: "Please create a password." },
                  minLength: { value: 8, message: "Password should not be less than 8 characters." },
                  // add more validation like symbol and digit check
                })}
              />
              {errors.password && <p className="text-sm font-semibold text-red-500">{errors.password.message}</p>}
            </div>
          </div>

          <button
            className="w-full p-4 text-white duration-200 rounded-lg bg-orange800 disabled:opacity-50"
            disabled={!isValid || loading}
          >
            {loading ? <Loader /> : "Sign Up"}
          </button>
        </form>

        <div className="flex-col pt-5 set-3">
          <p>
            Already have an account?{" "}
            <Link href="/account/login" className="underline text-orange800">
              Sign In
            </Link>
          </p>
          <p>OR</p>
          <GoogleSignInButton onClick={() => signIn("google")} />
          {/* <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default page;
