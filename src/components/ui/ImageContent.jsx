"use client";
import { RiAddLine, RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const ImageContent = ({ _id, newDimension, userId }) => {
  return (
    <Link href={`/images/${_id}`}>
      <div className="relative top-0 left-0 w-full -z-0 main-image">
        {/* <div className="overlay" /> */}
        <Image
          width={newDimension?.width}
          height={newDimension?.height}
          src={newDimension?.url}
          alt={newDimension?.publicId}
          className="w-full h-full object-cover"
          unoptimized
          unselectable="on"
        />
        {/* <div className="overlay-rev" /> */}

        <div className="image-options">
          <div className="full-overlay" />
          <div className="absolute z-20 flex items-center gap-2 top-1 left-3">
            <Image
              unoptimized
              unselectable="on"
              width={50}
              height={50}
              src={userId?.profilePicture}
              alt={userId?.firstName}
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
            <div className="flex flex-col leading-tight text-white">
              <p className="font-bold">{userId?.firstName}</p>
              <p className="text-[0.8em]">{userId?.lastName}</p>
            </div>
          </div>
          <div className="absolute z-20 flex items-center justify-between w-full px-3 bottom-1">
            <div className="flex items-center gap-2">
              <div className="img-icon">
                <RiHeart2Line />
              </div>

              <div className="img-icon">
                <RiAddLine />
              </div>
            </div>

            <div className="img-icon">Download</div>
          </div>
        </div>
        {/* } */}
      </div>
    </Link>
  );
};

export default ImageContent;
