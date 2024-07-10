"use client"
import Contact from "@/components/forms/Contact";
import Footer from "@/components/layouts/Footer";
import CarCard from "@/components/shared/CarCard";
import CarCarousel from "@/components/shared/CarCarousel";
import ReviewCard from "@/components/shared/ReviewCard";
import ServiceCard from "@/components/shared/ServiceCard";
import Testimonial from "@/components/shared/testimonial";
import AboutUs from "@/components/widgets/AboutUs";
import ClientSection from "@/components/widgets/ClientSection";
import ContactSection from "@/components/widgets/ContactSection";
import Hero from "@/components/widgets/Hero";
import OurExpertise from "@/components/widgets/OurExpertise";
import ServicesReview from "@/components/widgets/ServicesReview";
import ServicesWidget from "@/components/widgets/ServicesWidget";
import StationSection from "@/components/widgets/StationWidget";
import TestimonialWidget from "@/components/widgets/TestimonialWidget";
import Vehicle from "@/components/widgets/Vehicle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className=" mt-4 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <Hero />
          <ServicesReview />
          <AboutUs />
          <OurExpertise />
          <Vehicle />
          <TestimonialWidget />
          <ServicesWidget />
          <StationSection />
          <ClientSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
