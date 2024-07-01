import Navbar from '../components/Navbar-Korean';
import Footer from '../components/Footer-Korean';
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
              성장을 촉진하는 전략적 접근<br className="hidden md:block" />
              <span className="block">
                <span className="text-[#FFB81C]">응집력</span> 혁신.
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              맞춤형 전략, 전문가의 지도, 원활한 전환 제공<br className="hidden md:block" />
              글로벌 기업을 위한 서비스. 우리의 서비스에는 컨설팅, 인력 배치, 인수 합병이 포함됩니다,<br className="hidden md:block" />
              인수, 중개, 그리고 전문 비즈니스 관리가 포함됩니다.
            </p>
            <a href="/about-korean" className="px-6 py-3 bg-[#FFB81C] rounded-full transition text-white mb-8">자세히 알아보기</a>
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