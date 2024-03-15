"use client";
import Image from "next/image";
import React, { useState } from "react";
import Loader from "../../../../components/Common/Loaders/Loader";
import Link from "next/link";
import GoogleSignInButton from "@/components/Common/Buttons/google-sign-in";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { toastError, toastSuccess } from "@/utils/helpers/toaster";

const page = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  // data -> email, password
  const submitForm = async (data) => {
    try {
      setLoading(true);
      // TODO: change this to next auth later
      const res = await signIn("credentials", { ...data });

      // if (!res.ok) {
      //   toastError("Login failed");
      //   setLoading(false);
      // }

      // toastSuccess("Login successful");
      // router.replace("/profile");
    } catch (e) {
      toast.error(e.response.data.error ?? "an error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      style={{ background: `url(./auth-bg.png)` }}
      className=" w-full min-h-[100vh] flex items-center justify-center"
    >
      <div className="container md:px-24 px-xPadding pt-5 pb-16 md:shadow-2xl shadow-none md:max-w-2xl md:min-h-[80vh] md:bg-white bg-transparent rounded-3xl flex  flex-col w-full md:h-full">
        <div className="flex flex-col items-center">
          <Link href="/" className="flex justify-center w-full">
            <Image src="/logo.png" alt="" width={300} height={300} className="w-40" />
          </Link>

          <p className="text-[1.5em] font-bold">Sign In</p>
        </div>

        <form onSubmit={handleSubmit(submitForm)} noValidate className="flex flex-col gap-4 mt-2">
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
            I don't have an account?{" "}
            <Link href="/account/register" className="underline text-orange800">
              Sign Up
            </Link>
          </p>

          <p>OR</p>

          <GoogleSignInButton onClick={() => signIn("google")} variant="login" />

          {/* <GoogleLogin
            className="w-full"
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
