"use client";
import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import { HiSave } from "react-icons/hi";
import Image from "next/image";

const Edit = () => {
  const { data: session } = useSession();

  const user = session?.user ?? {};
  const inputClass = "p-3 border border-zinc-300 rounded-md w-full text-sm placeholder:text-zinc-400";

  const [imageUrl, setImageUrl] = useState(user.image);

  const ref = useRef(null);

  const triggerImagePick = () => ref.current && ref.current.click();

  const handlePickImage = (event) => {
    const files = event.target.files || [];

    if (!files) {
      setImageUrl(user.image);
      return;
    }

    const imageFile = files[0];

    const blob = URL.createObjectURL(imageFile);
    setImageUrl(blob);
  };

  return (
    <div>
      <h2 className="text-center text-[32px] font-semibold">Edit Profile</h2>

      <div className="container flex flex-col items-center justify-center w-full gap-5 py-5 m-auto md:w-2/3 md:px-0">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center">
            <div className="size-[100px] rounded-full overflow-hidden">
              <Image
                src={imageUrl}
                alt="profile image"
                className="object-cover w-full h-full rounded-full"
                width={100}
                height={100}
              />
            </div>
          </div>
          <button className="px-5 py-3 text-white rounded-lg bg-orange800" onClick={triggerImagePick}>
            Edit
          </button>
          <input
            type="file"
            accept="image/jpeg, image/png"
            className="hidden"
            ref={ref}
            max={1}
            onChange={handlePickImage}
          />
        </div>

        <div className="grid w-full gap-5 sm:grid-cols-2">
          <div className="space-y-1">
            <label>First Name</label>
            <input className={`${inputClass}`} type="text" placeholder="John" />
          </div>

          <div className="space-y-1">
            <label>Last Name</label>
            <input className={`${inputClass}`} type="text" placeholder="Doe" />
          </div>

          <div className="space-y-1">
            <label>Username</label>
            <input className={`${inputClass}`} type="text" placeholder="johndoe04" />
          </div>

          <div className="space-y-1">
            <label>Email</label>
            <input className={`${inputClass}`} type="text" placeholder="joh***doe@gmail.com" />
          </div>

          <div cl className="space-y-1" assName="bio">
            <label>Short Bio</label>
            <textarea name="" className={`${inputClass}`} id="" placeholder="I'm a passionate..."></textarea>
          </div>

          <div className="space-y-1">
            <label>Twitter</label>
            <input className={`${inputClass}`} type="text" placeholder="https://x.com/..." />
          </div>

          <div className="space-y-1">
            <label>Instagram</label>
            <input className={`${inputClass}`} type="text" placeholder="https://instagram.com/..." />
          </div>

          <div className="space-y-1">
            <label>Website</label>
            <input className={`${inputClass}`} type="text" placeholder="https://yourwebsite.com" />
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
