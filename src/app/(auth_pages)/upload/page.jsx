"use client";

import { useState } from "react";
import Image from "next/image";

import { InputText, InputSelect, InputCheckbox } from "@/components/Common/Form/input";
import Link from "next/link";
import { FormButton } from "@/components/Common/Form/button";

// impor@/components/UIs/FormInputs/svg/video.svg';
import imageIcon from "@/../public/svg/image.svg";
// import collectionIcon from '@/public/svg/collection.svg';
import uploadIcon from "@/../public/svg/upload.svg";
import eyeIcon from "@/../public/svg/eye.svg";
import lockIcon from "@/../public/svg/lock.svg";
import Navbar from "@/components/Layout/Navbar";
import { HiPlus, HiX } from "react-icons/hi";
import FileBase64 from "react-file-base64";

export default function Upload() {
  const [active, setActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    userTitle: "",
    userDetails: "",
    userTools: "",
    userImgCatog: "",
    userVisibilty: "",
    userLicense: "",
    userRating: false,
    userPermission: false,
    userAgree: false,
  });
  const [img, setImage] = useState();

  const handleFileInputChange = (e) => {
    const file = e.target.files && e.target.files[0];

    // Set the selected file to state
    setSelectedFile(file);

    setActive(true);
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...formData, image: img };
    console.log("Form Submitted");
  };

  const [key, setKey] = useState("");

  const handleKey = (e) => {
    setKey(e.target.value);
  };
  const [keywords, setKeywords] = useState([]);

  const handleKeyword = (k) => {
    setKey("");
    setKeywords([...keywords, k]);
  };

  const removeKeyword = (k) => {
    let filtered = keywords.filter((key) => key != k);
    console.log(filtered);
    setKeywords(filtered);
  };

  return (
    <>
      <Navbar />
      <main className=" bg-grey100 rounded-[10px] font-lato grid lg:justify-between lg:grid-cols-[60%_38%] md:flex md:flex-col md:px-xPadding  lg:gap-6 px-[100px] lg:py-8 mt-16">
        {!active ? (
          <div>
            <div className="text-center flex flex-col items-center justify-center gap-7 bg-white h-[90vh] fixed md:static md:w-full w-[50%] ">
              <div>
                <h1 className="font-bold text-[1.75rem] leading-[2.5rem]">Upload Content</h1>

                <p className="text-sm font-medium leading-6 text-orange700">
                  Upload the Image you want to share on afrimage
                </p>
              </div>

              <div className="flex items-center justify-center gap-6">
                {[
                  // {
                  //     label: 'Video',
                  //     name: 'user-video',
                  //     accept: 'video/*',
                  //     multiple: false,
                  //     iconUrl: videoIcon,
                  // },
                  {
                    label: "Image",
                    name: "user-img",
                    accept: "image/*",
                    multiple: false,
                    iconUrl: imageIcon,
                  },
                  // {
                  //     label: 'Collection',
                  //     name: 'user-collection',
                  //     multiple: true,
                  //     iconUrl: collectionIcon,
                  // },
                ].map((item) => (
                  <div key={item.label} className="relative w-fit">
                    <label
                      htmlFor={item.name}
                      className="bg-orange400 rounded-xl w-[4.25rem] h-[4.25rem] flex items-center justify-center cursor-pointer"
                    >
                      <Image src={item.iconUrl} alt="" />

                      <FileBase64
                        type="file"
                        name={item.name}
                        id={item.name}
                        accept={item.accept || undefined}
                        multiple={item.multiple}
                        onDone={(base64) => {
                          setImage(base64);
                          setActive(true);
                        }}
                        className="absolute hidden opacity-0"
                      />
                    </label>

                    <p className="mt-1 text-sm font-medium leading-6 text-orange700">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {/* This section displays data as it's inputted in the Form  */}
        {active ? <InputDisplay formData={formData} selectedFile={img.base64} /> : null}

        <form onSubmit={handleSubmit} className="pb-8 mt-6 space-y-4 lg:bg-white lg:mt-0 lg:py-7 lg:px-5">
          <div className="grid gap-4 mb-4 md:grid-cols-2 lg:grid-cols-1">
            {[
              { label: "Image Title", name: "userTitle" },
              {
                label: "Short details about the image",
                name: "userDetails",
              },
            ].map((item) => (
              <InputText key={item.label} label={item.label} name={item.name} onChange={handleInputChange} />
            ))}

            {[
              {
                label: "Image Categories",
                name: "userImgCatog",
                options: [
                  "Select a category",
                  "Food",
                  "People",
                  "Infrastruture",
                  "Animal",
                  "Fashion&Beauty",
                  "Business",
                  "Health&Fitness",
                  "Music",
                  "Nature",
                  "Culture",
                ],
              },
              // {
              //     label: 'Afrimage Visibility',
              //     name: 'userVisibility',
              //     options: ['Select an option', 'Everyone', 'Nobody'],
              // },
              // {
              //     label: 'License',
              //     name: 'userLicense',
              //     options: ['Select an option', 'Free', 'Paid'],
              // },
            ].map((item) => (
              <InputSelect
                key={item.label}
                label={item.label}
                name={item.name}
                options={item.options}
                onChange={handleInputChange}
              />
            ))}
          </div>

          {/* {[
                    {
                        label: 'This image contains Adult content',
                        name: 'userRating',
                    },
                    {
                        label: 'I upload image I own the right to',
                        name: 'userPermission',
                    },
                ].map((item) => (
                    <InputCheckbox
                        key={item.label}
                        label={item.label}
                        name={item.name}
                        onChange={handleInputChange}
                    />
                ))} */}

          <div className="w-full">
            <p>Search Keywords</p>
            <div className="flex gap-2">
              <input type="text" value={key} className="w-full" onChange={handleKey} />
              <button
                className="px-3 text-white border rounded-md text-md bg-orange800"
                onClick={() => handleKeyword(key)}
              >
                <HiPlus />
              </button>
            </div>

            {keywords.length > 0 && (
              <div className="mt-3">
                <p>Added Keywords</p>

                <div className="flex flex-wrap gap-3">
                  {keywords.map((key, i) => {
                    return (
                      <div className="px-2 py-1 flex gap-1 border items-center border-gray-600 w-fit rounded-md text-[12px] text-gray-600">
                        {key}
                        <HiX className="cursor-pointer" onClick={() => removeKeyword(key)} />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Custom Checkbox comp */}
          <div className="flex items-center justify-between gap-4 py-1 leading-7">
            <label htmlFor="userAgree" className="text-black">
              I Agree to all{" "}
              <Link href="" className="text-green700">
                Afrimage content policy
              </Link>
            </label>

            <input
              type="checkbox"
              name="userAgree"
              id="userAgree"
              onChange={(e) => handleInputChange("userAgree", e.target.checked)}
              className="form-checkbox h-[18px] w-[18px] border-2 border-[#49454F] bg-transparent cursor-pointer rounded-sm checked:bg-orange700 focus:bg-orange700 focus:outline-orange700 checked:hover:bg-orange700 checked:focus:bg-orange700"
            />
          </div>

          {/* Actions Button */}
          <div className="flex flex-col items-center justify-center pt-5 space-y-3 md:gap-4 md:space-y-0 md:py-8">
            <FormButton type="main" submit={true} className="flex items-center justify-center gap-2">
              <Image src={uploadIcon} alt="" width={24} height={24} />
              Publish
            </FormButton>

            {/* <FormButton type='outline'>Save To Draft</FormButton> */}

            {/* <FormButton type='outline'>Cancel</FormButton> */}
          </div>
        </form>
      </main>
    </>
  );
}

// type InputDisplayProps = {
//     formData: {
//         userDetails: string;
//         userImgCatog: string;
//         userTitle: string;
//         // userVisibility: string;
//         // userLicense: string;
//     };
//     selectedFile: any;
// };

function InputDisplay({ formData, selectedFile }) {
  return (
    <section className="bg-white  py-8 px-6 rounded-[10px] flex flex-col justify-end gap-4 md:px-2 md:py-6 lg:gap-2 h-full">
      <Image
        src={selectedFile}
        alt="Selected File"
        className="flex-1 w-full h-full bg-red-400"
        width={100}
        height={100}
      />

      <div className="leading-6">
        <h3 className="text-sm font-medium leading-6 text-grey600">Title</h3>
        <p className="text-black font-bold min-h-[24px]">{formData.userTitle}</p>
      </div>

      <div className="leading-6">
        <h3 className="text-sm font-medium leading-6 text-grey600">Details of the image</h3>
        <p className="text-black font-bold min-h-[24px]">{formData.userDetails}</p>
      </div>

      <div className="leading-6">
        <h3 className="text-sm font-medium leading-6 text-grey600">Image Categories</h3>
        <p className="text-black font-bold min-h-[24px]">{formData.userImgCatog}</p>
      </div>

      <div className="flex items-center text-lg font-medium leading-7 gap-9">
        <div className="flex items-center gap-1">
          {/* TODO: Set Logic to change Icon and text based on user license */}
          <Image src={lockIcon} alt="" width={24} height={24} />
          <p className="text-success">Free</p>
        </div>
        <div className="flex items-center gap-1">
          {/* TODO: Set Logic to change icon and text based on user Visibility */}
          <Image src={eyeIcon} alt="" width={24} height={24} />
          <p className="text-grey900">Everyone</p>
        </div>
      </div>
    </section>
  );
}
