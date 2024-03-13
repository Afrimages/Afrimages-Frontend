"use client";
import { signIn } from "@/utils/helpers/request";
import Image from "next/image";
import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import Loader from "../../../../components/Common/Loaders/Loader";
import Link from 'next/link'

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = { email, password };
    console.log(data);
    signIn(data);
  };

  return (
    <div
      style={{ background: `url(./auth-bg.png)` }}
      className=" w-full min-h-[100vh] flex items-center justify-center"
    >
      <div className="container px-24 md:px-xPadding pt-5 pb-16 shadow-2xl md:shadow-none w-2/5 min-h-[80vh] bg-white md:bg-transparent rounded-3xl flex  flex-col md:w-full md:h-full">
        <div className="flex flex-col items-center">
          <Link href="/" className="flex justify-center w-full">
            <Image src="/./logo.png" alt="" width={0} height={0} className="w-2/5" unoptimized />
          </Link>

          <p className="text-[1.5em] font-bold">Sign In</p>
        </div>

        <form action="" className="flex flex-col gap-4 auth">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={handleEmail} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePassword} />
          </div>

          <button onClick={submitForm} className="w-full p-4 text-white rounded-lg bg-orange800">
            {loading ? <Loader /> : "Sign In"}
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

          {/* <GoogleOAuthProvider clientId="<your_client_id>">
                    <div className='justify-center w-full p-3 border border-black rounded-lg cursor-pointer set-3'>
                        <RiGoogleFill />
                        <p>
                            Sign in with Google
                        </p>
                    </div>
                </GoogleOAuthProvider> */}

          <GoogleLogin
            className="w-full"
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
