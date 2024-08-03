import React from "react";
import { FaWalking, FaCar, FaTrain, FaBuilding, FaRegHeart } from "react-icons/fa";
import { MdOutlineLayers, MdOutlineSocialDistance } from "react-icons/md";

interface Props {
  title: string;
  imageUrl: string;
  price: string;
  walking: string;
  car: string;
  train: string;
  facilities: string[];
  cheapest?: string;
  description: string;
}

export default function DetailedCard({
  title,
  imageUrl,
  price,
  walking,
  car,
  train,
  facilities,
  cheapest,
  description,
}: Props) {
  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row p-4 rounded border text-card-foreground shadow-sm gap-3">
      <div className=" relative">
      <img
        src={imageUrl}
        alt={title}
        className="w-48 h-48 object-cover mr-4 transition-all hover:scale-105"
        loading="lazy"
      />
      <div className="absolute top-0 right-6 gap-4 flex flex-col items-center justify-center pt-2">
        <span className="bg-white rounded-full p-2"><FaRegHeart /></span>
        <span className="bg-white rounded-full p-2"><MdOutlineLayers /></span>
      </div>
      </div>
      <div className="flex-grow text-center lg:text-left">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-xs text-wrap w-[400px]">{description}</p>
        <div className="text-gray-500 text-xs flex items-center space-x-4 pt-4">
          <p className="text-gray-700 text-md font-semibold flex items-center gap-1">
          <MdOutlineSocialDistance />  Distance to campus:
          </p>
          <span className="flex items-center gap-1">
            <FaWalking className="text-md" />
            <span>{walking}</span>
          </span>
          <span className="flex items-center gap-1">
            <FaCar className="text-md" />
            <span>{car}</span>
          </span>
          <span className="flex items-center gap-1">
            <FaTrain className="text-md" />
            <span>{train}</span>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1 mt-2">
          <p className="text-gray-700 text-xs font-semibold flex items-center gap-1"> <FaBuilding /> Facilities:</p>
          {facilities.map((facility, index) => (
            <span key={index} className=" text-gray-700 text-xs">
              {facility}
            </span>
          ))}
        </div>

        {cheapest && (
          <div className="mt-2 bg-blue-800 text-white w-full max-w-[200px] rounded px-2 py-1 text-xs">
            {cheapest}
          </div>
        )}
      </div>
      <div className="flex flex-row items-center lg:items-start lg:flex-col gap-20">
        <p className=" text-gray-500 text-sm">
          From <span className="text-red-500 font-bold ">{price}</span>/week
        </p>
        <div className=" space-y-3 text-gray-500">
          <p className="flex items-center gap-2 text-sm">
            <span>Entire place</span> 
              <span>{price}</span>
          </p>
          <button className="h-12 w-[120px] text-black bg-yellow-400 text-sm px-2">View rooms</button>
        </div>
      </div>
    </div>
  );
}
