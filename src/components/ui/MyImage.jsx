import Image from "next/image";
import React from "react";
import { RiAddLine, RiDownload2Fill, RiHeart2Line } from "react-icons/ri";
import Link from "next/link";

const MyImage = (content) => {
  return (
    <div className="">
      <Link className="" href={`/images/2`}>
        <div className="w-full h-[300px] relative top-0 left-0 -z-0 main-image">
          <div className="overlay" />
          <Image
            width={500}
            height={500}
            src={content.imageUrl}
            alt={content.title}
            className="object-cover w-full h-full"
            unselectable="on"
          />
          <div className="overlay-rev" />

          <div className="image-options">
            <div className="full-overlay" />
            {/* <div className='absolute z-20 flex items-center gap-2 text-white top-1 '>
              <HiEye size={30}/>
              <HiPencil size={30}/>
              <HiTrash size={30}/>
            </div> */}
          </div>
          {/* } */}
        </div>
      </Link>

      <div>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <RiDownload2Fill size="24px" />
          <p>200</p>
        </div>

        <div className="flex items-center gap-2">
          <RiHeart2Line size="24px" />
          <p>243</p>
        </div>
      </div>
    </div>
  );
};

export default MyImage;
