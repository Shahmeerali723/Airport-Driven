import Image from 'next/image';
import Contact from '../forms/Contact';

const ContactSection = () => {
  return (
    <div className='w-full py-5'>

      <div className='w-[80%] mx-auto text-center p-2'>
        <h2 className='text-5xl uppercase text-primary font-extrabold font-rockstar'>
          Contact Us
        </h2>
        <p className=''>
          {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        </p>
      </div>

      <div className='relative mt-36'>
        <Image
          alt='Map'
          src={"/map.png"}
          className='w-full h-auto'
          layout="responsive"
          width={2000}
          height={100}
        />

        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
          <Contact />
        </div>
      </div>

    </div>
  );
};

export default ContactSection;
