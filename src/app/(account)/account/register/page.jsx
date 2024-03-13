"use client";
import Image from "next/image";
import React, { useState } from "react";
import { continueWithGoogle, signUp } from "../../../../utils/helpers/request";
import Loader from "../../../../components/Common/Loaders/Loader";
import Link from "next/link";
import GoogleSignInButton from "@/components/Common/Buttons/google-sign-in";
import { signIn } from "next-auth/react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFName = (e) => {
    setFname(e.target.value);
  };

  const handleLname = (e) => {
    setLname(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = { email, firstName, lastName, password };
    signUp(data);
  };

  const google = () => {
    continueWithGoogle();
  };

  return (
    <div
      style={{ background: `url(./auth-bg.png)` }}
      className=" w-full min-h-[100vh] flex items-center justify-center"
    >
      <div className="container px-24 md:px-xPadding pt-5 pb-16  shadow-2xl md:shadow-none w-2/5 min-h-[80vh] bg-white md:bg-transparent rounded-3xl flex  flex-col md:w-full md:h-full">
        <div className="flex flex-col items-center">
          <Link href="/" className="flex justify-center w-full">
            <Image src="/./logo.png" alt="" width={0} height={0} className="w-2/5" unoptimized />
          </Link>
          <p className="text-[1.5em] font-bold">Sign Up</p>
        </div>

        <form action="" className="flex flex-col gap-4 auth">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={handleEmail} />
          </div>

          <div>
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" value={firstName} onChange={handleFName} />
          </div>

          <div>
            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" value={lastName} onChange={handleLname} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePassword} />
          </div>

          <button onClick={submitForm} className="w-full p-4 text-white rounded-lg bg-orange800">
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
