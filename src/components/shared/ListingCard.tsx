"use client"
import { Tag } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaWalking, FaCar, FaTrain } from "react-icons/fa";

interface Props {
  title: string;
  imageUrl: string;
  price: string;
  walking: string;
  car: string;
  train: string;
  voucher?: string;
  cheapest?: string;
}

export default function ListingCard({
  title,
  imageUrl,
  price,
  walking,
  car,
  train,
  voucher,
  cheapest,
}: Props) {

  return (
    <div className="relative w-72 h-full m-4 rounded border text-card-foreground shadow-sm">
      <div className=" relative">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-1/2 transition-all hover:scale-105"
          loading="lazy"
        />

        {voucher && (
          <div className="absolute bottom-0 w-full bg-yellow-500 text-white text-xs py-2 px-4 flex items-center justify-center">
            <Tag className="w-4 h-4 mr-1" />
            <span>{voucher}</span>
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xs text-gray-500">
          From <span className="text-red-500 font-bold text-sm">{price}</span>{" "}
          /week
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
        {cheapest && (
          <div className="mt-2 bg-blue-800 text-white w-full max-w-[200px] rounded px-2 py-1 text-xs">
            {cheapest}
          </div>
        )}
        </div>
        <div className="text-gray-500 text-xs flex items-center space-x-4 pt-4">
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
      </div>
      
    </div>
  );
}
