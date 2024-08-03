"use client";
import React, { useState } from "react";
import Input from "./ui/Input";
import { Building2 } from "lucide-react";
import { Map } from "lucide-react";
import { detailedListings } from "@/constants/data";
import DetailedCard from "./shared/DetailedCard";

export default function Header() {
  const [property, setProperty] = useState("");
  const [city, setCity] = useState("");
  const [searchListings, setSearchListings] = useState(detailedListings);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (property: string, city: string) => {
    const filtered = detailedListings.filter((listing) =>
      listing.title.toLowerCase().includes(property.toLowerCase()) &&
      listing.description.toLowerCase().includes(city.toLowerCase())
    );
    setSearchListings(filtered);
    setSearchPerformed(true);
  };

  return (
    <header className="relative z-10">
      <img
        src="/bg.webp"
        className="h-screen object-cover opacity-95  aspect-auto w-full md:h-3/7 lg:h-[450px]"
        alt="hero"
      />
      <div className="container absolute flex flex-col  space-y-12 items-center justify-start top-40 bottom-0">
        <article className=" text-center text-white ">
          <h2 className=" text-5xl font-bold ">
            Discover Your Home Away from Home
          </h2>
          <p className="text-lg font-semibold">
            Find student accommodations near top universities and cities
            worldwide.
          </p>
        </article>
        <search className="w-full gap-2 grid grid-flow-row lg:grid-flow-col justify-center items-center">
          <Input
            type="text"
            placeholder="Search by Property"
            value={property}
            onChange={(e) => setProperty(e.target?.value)}
            icons={<Building2 />}
          />
          <Input
            type="address"
            value={city}
            onChange={(e) => setCity(e.target?.value)}
            placeholder="Search by City"
            icons={<Map />}
          />
          <button
            onClick={() => handleSearch(property, city)}
            className=" bg-black py-3 px-8 rounded-md text-white hover:bg-accent hover:text-accent-foreground"
          >
            Search
          </button>
        </search>
      </div>
      <div className="container mx-auto p-4">
        {searchPerformed && searchListings.length > 0 && (
        <div className="grid grid-flow-row gap-4">
          {searchListings.map((listing, index) => (
            <DetailedCard
              key={index}
              title={listing.title}
              imageUrl={listing.imageUrl}
              price={listing.price}
              distance={listing.distance}
              facilities={listing.facilities}
              description={listing.description}
              cheapest={listing.cheapest}
            />
          ))}
        </div>
      )}
      </div>
    </header>
  );
}
