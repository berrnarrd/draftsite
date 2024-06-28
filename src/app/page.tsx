import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="relative flex-grow flex flex-col justify-start bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Navbar />
        <main className="relative flex-grow flex flex-col justify-start text-white p-4 md:p-8 pb-16 z-10">
          <div className="flex flex-col items-start justify-start text-left p-4 md:p-8 w-full mt-5 md:mt-20">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Igniting Growth through Strategic<br className="hidden md:block" />
              <span className="block">
                <span className="text-[#FFB81C]">Cohesion</span> and Innovation.
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Providing personalized strategies, expert guidance, and seamless transitions<br className="hidden md:block" />
              for global businesses. Our services include consulting, staffing, mergers,<br className="hidden md:block" />
              acquisitions, brokerage, and professional business management.
            </p>
            <a href="/about" className="px-6 py-3 bg-[#FFB81C] rounded-full transition text-white mb-8">Learn More</a>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#FFB81C]" style={{ width: '25px', height: '25px' }} />
                <span className="text-sm md:text-base">(832) 613-5477</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#FFB81C]" style={{ width: '25px', height: '25px' }} />
                <span className="text-sm md:text-base">info@commonoptions.com</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-[#FFB81C]" style={{ width: '25px', height: '25px' }} />
                <span className="text-sm md:text-base">3950 Dechman Dr, Grand Prairie TX, 75052</span>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;