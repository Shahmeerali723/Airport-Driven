"use client";
import React, { ChangeEvent, useState } from "react";
import InputComp from "../shared/InputComp";
import { Button } from "../ui/button";
import Link from "next/link";

interface FormData {
  pickUp: string;
  via: string;
  dropoff: string;
  date: string;
  time: string;
  journey: string;
}

const Booking = () => {
  const [formData, setFormData] = useState<FormData>({
    pickUp: "",
    via: "",
    dropoff: "",
    date: "",
    time: "",
    journey: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  function handleSubmitForm(e: any) {
    const { pickUp, via, dropoff, date, time, journey } = formData;
    e.preventDefault();
    if (
      pickUp !== "" ||
      via !== "" ||
      dropoff !== "" ||
      date !== "" ||
      time !== "" ||
      journey !== ""
    ) {
      setFormData({
        pickUp: "",
        via: "",
        dropoff: "",
        date: "",
        time: "",
        journey: "",
      });
      // Handle form submission logic here

      console.log(formData);
    } else {
      alert("Please fill all the fields");
    }
  }
  return (
    <form className="grid grid-flow-row gap-3 xl:gap-5" action={"#!"}>
      <InputComp
        placeholder="Pickup"
        classes={{
          icon: "bg-black text-white",
          div: "border-[#999999] bg-[#E8E4E4] rounded-lg lg:p-0",
        }}
        name={"pickUp"}
        value={formData.pickUp}
        onChange={handleChange}
      />
      <InputComp
        placeholder="Via "
        classes={{
          icon: "bg-black text-white",
          div: "border-[#999999] bg-[#E8E4E4] rounded-lg lg:p-0",
        }}
        name={"via"}
        value={formData.via}
        onChange={handleChange}
      />
      <InputComp
        placeholder="Drop Off"
        classes={{
          icon: "bg-black text-white",
          div: "border-[#999999] bg-[#E8E4E4] rounded-lg lg:p-0",
        }}
        name={"dropoff"}
        value={formData.dropoff}
        onChange={handleChange}
      />

      <select
        id="journey"
        name="journey"
        className="bg-[#e8e4e4] border-[1px] border-[#999999] focus:outline-none rounded-lg  text-black placeholder-black w-full p-1 sm:p-2 text-xs sm:text-sm"
        value={formData.journey}
        onChange={handleChange}
      >
        <option value="" disabled className="text-black">
          {" "}
          Journey
        </option>
        <option value="Single">Single</option>
        <option value="Wait">Wait</option>
        <option value="Return">Return</option>
      </select>
      {/* <InputComp
                placeholder="Journey"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg lg:p-0" }}
                name={"journey"}
                value={formData.journey}
                onChange={handleChange}
            /> */}
      <div className="flex w-full">
        <InputComp
          placeholder="dd/mm/yy"
          classes={{
            icon: "bg-black text-white",
            div: "border-[#999999] bg-[#E8E4E4]  w-full lg:p-0",
          }}
          name={"date"}
          type={"date"}
          value={formData.date}
          onChange={handleChange}
        />
        <InputComp
          // placeholder="Journey"/
          type={"time"}
          classes={{
            icon: "bg-black text-white",
            div: "border-[#999999] bg-[#E8E4E4]  w-full lg:p-0",
          }}
          name={"time"}
          value={formData.time}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center items-center">
        <Button
          type="submit"
          onClick={(e) => handleSubmitForm(e)}
          className="w-fit  shadow-primary text-xs  sm:text-sm"
        >
          <Link href={"/quote"}>Book Now</Link>
        </Button>
      </div>
    </form>
  );
};

export default Booking;
