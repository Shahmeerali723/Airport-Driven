import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="bg-custom-radial text-white py-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between md:w-1/2 py-8 ">
          <div className="absolute mt-20 mr-20   md:mr-12 rounded-lg overflow-hidden shadow-lg w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/about1.png" // Replace with your image path
              alt="Person"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative top-0 left-0 z-10 ml-20 sm:ml-36 md:ml-48 md:mt-0 rounded-lg overflow-hidden shadow-lg w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/about2.png" // Replace with your image path
              alt="City"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-lg mt-6 md:mt-0 text-center md:text-left md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-rockstar">ABOUT US</h2>
          <p className="mb-6 font-poppins">
            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          </p>
          <button className="bg-white text-red-700 font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-100">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
