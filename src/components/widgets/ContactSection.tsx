import Contact from '../forms/Contact';

const ContactSection = () => {
  return (
    <div className='w-full py-10 bg-gray-100'>
      <div className='max-w-7xl mx-auto text-center p-4'>
        <h2 className='text-2xl sm:text-3xl md:text-5xl uppercase text-primary font-extrabold tracking-widest'>
          Contact Us 
        </h2>
        <p className='mt-4 text-xs sm:text-sm md:text-lg text-gray-700'>
          Contact [Your Company Name] today for reliable airport transfers to Heathrow, Gatwick, London City, or Luton. Our professional drivers ensure punctual and stress-free journeys.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row justify-center items-start sm:items-center mt-10 space-y-10 sm:space-y-0 sm:space-x-10'>
        {/* <div className='w-full sm:w-1/2 p-6 bg-white shadow-lg rounded-lg'>
          <h3 className='text-xl font-semibold text-primary mb-4'>How to Reach Us</h3>
          <div className='space-y-3'>
            <p className='flex items-center text-gray-700'>
              <span className='font-semibold'>Phone:</span> <span className='ml-2'>📞 +44 2080 504 099</span>
            </p>
            <p className='flex items-center text-gray-700'>
              <span className='font-semibold'>Whatsapp:</span> <span className='ml-2'>+44 07376 914242</span>
            </p>
            <p className='flex items-center text-gray-700'>
              <span className='font-semibold'>Email:</span> <span className='ml-2'><a href='mailto:hello@airportdriven.com' className='text-primary'>hello@airportdriven.com</a></span>
            </p>
            <p className='flex items-center text-gray-700'>
              <span className='font-semibold'>Visit:</span> <span className='ml-2'><a href='http://www.airportdriven.com' className='text-primary'>www.airportdriven.com</a></span>
            </p>
          </div>
          <h3 className='text-xl font-semibold text-primary mt-8 mb-4'>Why Choose Us?</h3>
          <ul className='list-disc list-inside text-gray-700 space-y-2'>
            <li>Reliable Service: Punctual transfers with a focus on reliability.</li>
            <li>Comfortable Travel: Enjoy a comfortable journey in our modern vehicles.</li>
            <li>24/7 Availability: We're available round-the-clock to meet your travel needs.</li>
          </ul>
        </div> */}
        
        {/* <div className='w-full sm:w-1/2 p-6 mt-10 sm:mt-0'> */}
          <Contact />
        {/* </div> */}
      </div>
    </div>
  );
};

export default ContactSection;
