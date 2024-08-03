"use client";
import React, { useState } from "react";
import ImageCard from "./shared/ImageCard";
import DetailedCard from "./shared/DetailedCard";
import ListingCard from "./shared/ListingCard";
import { detailedListings, featuredListings } from "@/constants/data";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

export default function Features() {
  const [sortOrder, setSortOrder] = useState<string>("asc");

  const cities = [
    { title: "Germany", imageUrl: "/img-1.webp" },
    { title: "Nigeria", imageUrl: "/img-2.webp" },
    { title: "USA", imageUrl: "/img-3.webp" },
    { title: "UK", imageUrl: "/img-4.webp" },
  ];

  const sortedListings = detailedListings.sort((a, b) => {
    const priceA = parseInt(a.price.replace(/[^0-9]/g, ""), 10);
    const priceB = parseInt(b.price.replace(/[^0-9]/g, ""), 10);
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  return (
    <main className="grid justify-center items-center py-12 px-6">
      <article className="text-center">
        <h3 className="text-3xl font-bold">Popular Cities across the Globe</h3>
        <p className="text-md ">
          Book student accommodations near top cities and universities around
          the world
        </p>
      </article>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center lg:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <ImageCard
              key={index}
              title={city.title}
              imageUrl={city.imageUrl}
            />
          ))}
        </div>
      </div>
      <article className="text-center my-6">
        <h3 className="text-3xl font-bold">
          
          Accommodations In Popular Cities
        </h3>
        <p className="text-md ">
          Choose a perfect place to call home in top cities
        </p>
      </article>
      
      <div className="p-4">
     
        <div className="flex flex-col items-center lg:flex-row lg:overflow-x-auto">
          {featuredListings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[1000px] mx-auto space-y-3">
        <div className="mb-4 space-x-3">
          <button
            onClick={() => setSortOrder("asc")}
            className=" bg-transparent text-black"
          >
           <FaSortAmountDown />
          </button>
          <button
            onClick={() => setSortOrder("desc")}
            className=" bg-transparent text-black"
          >
            <FaSortAmountUp />
          </button>
        </div>
        {sortedListings.map((listing, index) => (
          <DetailedCard key={index} {...listing} />
        ))}
      </div>
    </main>
  );
}
