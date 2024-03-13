"use client";
import React from "react";
import { HiSave } from "react-icons/hi";
import useLocalStorage from "use-local-storage";

const Edit = () => {
  const [user, setUser] = useLocalStorage("user", {});

  return (
    <div>
      <h2 className="text-center text-[32px] font-semibold">Edit Profile</h2>

      <div className="flex flex-col items-center justify-center w-full gap-5 m-auto my-5 md:w-2/3 p-xPadding md:px-0">
        <div className="flex flex-col gap-3">
          <img src={user?.profilePicture} alt="" className="rounded-full" />
          <button className="px-6 py-3 text-white rounded-md bg-orange800">Change Profile Picture</button>
        </div>

        <div className="flex flex-wrap gap-5 edit">
          <div>
            <p>First Name</p>
            <input type="text" />
          </div>

          <div>
            <p>Last Name</p>
            <input type="text" />
          </div>

          <div>
            <p>Username</p>
            <input type="text" />
          </div>

          <div>
            <p>Email</p>
            <input type="text" />
          </div>

          <div className="bio">
            <p>Short Bio</p>
            <textarea name="" id=""></textarea>
          </div>

          <div>
            <p>Twitter</p>
            <input type="text" />
          </div>

          <div>
            <p>Instagram</p>
            <input type="text" />
          </div>

          <div>
            <p>Website</p>
            <input type="text" />
          </div>
        </div>

        <button className="flex items-center justify-center w-full gap-2 px-6 py-3 text-center text-white rounded-md bg-orange800">
          Save <HiSave />{" "}
        </button>
      </div>
    </div>
  );
};

export default Edit;
