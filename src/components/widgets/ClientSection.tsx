import Image from 'next/image';

const companyLogos = [
    "/client1.png",
    "/client2.png",
    "/client3.png",
    "/client4.png",
    "/client5.png",
];

const ClientSection = () => {
  return (
    <div className='w-full bg-primary'>

      <div className='container flex flex-col items-center gap-10 py-5'>

        <h2 className='uppercase text-3xl md:text-4xl lg:text-6xl font-rockstar font-extrabold text-white text-center'>
          Our Clients
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 '>
          {companyLogos.map((logo, index) => (
            <div key={index} className='bg-white flex items-center justify-center p-2 rounded-lg'>
              <Image alt='' src={logo} width={150} height={150} />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default ClientSection;
