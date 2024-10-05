import Image from "next/image";
import React from "react";

export default function HeroImage() {
  return (
    <div className='hidden lg:block'>
      <div className='relative overflow-hidden w-full h-full'>
        <Image
          src={"/images/hero-image.jpg"}
          alt={"hero-image"}
          fill
          priority
          className='object-cover'
        />
      </div>
    </div>
  );
}
