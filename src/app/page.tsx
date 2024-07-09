"use client"
import CarCarousel from "@/components/shared/CarCarousel";
import ReviewCard from "@/components/shared/ReviewCard";
import ServiceCard from "@/components/shared/ServiceCard";
import Testimonial from "@/components/shared/testimonial";
import AboutUs from "@/components/widgets/AboutUs";
import Hero from "@/components/widgets/Hero";
import ServicesReview from "@/components/widgets/ServicesReview";
import ServicesWidget from "@/components/widgets/ServicesWidget";
import TestimonialWidget from "@/components/widgets/TestimonialWidget";
import Vehicle from "@/components/widgets/Vehicle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className=" mt-4 flex flex-col gap-10">
      <div className="">
              <Hero />
             <ServicesReview/>
             <AboutUs/>
             <hr />
             <hr />
             <hr />
             <hr />
             <Vehicle/>
             <TestimonialWidget/>
             <ServicesWidget/>
            </div>
      </div>
    </div>
  );
}
