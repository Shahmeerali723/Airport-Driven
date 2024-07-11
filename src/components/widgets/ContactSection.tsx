import Image from 'next/image';
import Contact from '../forms/Contact';

const ContactSection = () => {
  return (
    <div className='w-full py-5'>

      <div className='w-[80%] mx-auto text-center p-2'>
        <h2 className='text-2xl sm:text-3xl md:text-5xl uppercase text-primary font-extrabold font-rockstar'>
          Contact Us
        </h2>
        <p className='text-xs sm:text-sm md:text-lg'>
          {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        </p>
      </div>

      <div className='relative sm:mt-36 '>
        <Image
          alt='Map'
          src={"/map.png"}
          className='w-full h-auto hidden sm:block'
          layout="responsive"
          width={2000}
          height={100}
        />

        <div className='sm:absolute sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 flex items-center mb-10 justify-center'>
          <Contact />
        </div>
      </div>

    </div>
  );
};

export default ContactSection;
