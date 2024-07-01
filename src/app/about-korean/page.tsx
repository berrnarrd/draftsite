import React from 'react';
import Navbar from '../components/Navbar-Korean';
import Footer from '../components/Footer-Korean';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBullseye, faEye, faLightbulb, faHandshake, faHeart, faStar, faFire, faChartLine, faCog, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const AboutUs: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col bg-[#006D5B] text-white">
            <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/who-we-are.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <Navbar />
                <section id="who-we-are" className="relative min-h-screen flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 mt-[-64px]">
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#FFB81C] rounded-full mb-4">
                        <FontAwesomeIcon icon={faUsers} className="text-white" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">저희는 누구인가</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        저희는 정직, 신뢰성, 투명한 서비스를 약속하는 신뢰받는 조직으로, 텍사스 주 및 연방 지침을 준수하며 최고 수준의 윤리적 기준을 유지합니다. 저희의 발자취는 조지아, 루이지애나, 아칸소, 오클라호마 등 여러 남부 주에 걸쳐 있습니다. 저희는 헬스케어 분야에 중점을 둔 풀서비스 인력 배치 및 채용을 전문으로 하며, 고용주와 헬스케어 전문가 간의 원활한 매칭을 보장합니다.
                    </p>
                </section>
            </div>
            <main className="flex-grow">
                <section id="mission" className="relative min-h-screen flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/mission.png')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#FFB81C] rounded-full mb-4">
                        <FontAwesomeIcon icon={faBullseye} className="text-white" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">우리의 사명</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        저희는 최상급 인재와 전략적 통찰력을 제공하여 헬스케어 인력을 최적화하고 직장 생산성을 향상시키며 협력을 촉진합니다. 가치 중심의 문화는 혁신을 장려하여 헬스케어 전문가들이 환자 치료에서 뛰어난 성과를 거둘 수 있도록 합니다. 저희는 아칸소, 조지아, 루이지애나, 오클라호마, 텍사스 전역에서 헬스케어 전문가, 협회, 고용주, 교육 기관 및 파트너들을 연결하여 강력한 지원을 제공합니다. 25년간의 헬스케어 자문 경험을 바탕으로 컨설팅, 인력 배치, 인수 합병 및 비즈니스 관리 서비스를 제공합니다. 정직, 신뢰성, 명확성을 바탕으로 텍사스 및 연방 윤리 기준을 준수합니다.
                    </p>
                </section>
                <section id="vision" className="relative min-h-screen flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/vision.png')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#FFB81C] rounded-full mb-4">
                        <FontAwesomeIcon icon={faEye} className="text-white" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">우리의 비전</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        저희는 헬스케어 산업이 모여 전문가들의 경력을 발전시키는 중심이 되고자 합니다. 헬스케어 인력 솔루션의 혁신자로 인정받아 제공자들이 변화하는 헬스케어 환경을 성공적으로 탐색할 수 있도록 돕습니다. 숙련된 임상 및 의사들의 광범위한 인재 풀을 유치하고 채용합니다. 산업 내 가장 유능하고 헌신적인 팀에 투자하는 것을 약속하여 지속적으로 우수한 주주 가치를 제공합니다.
                    </p>
                </section>
                <section id="values" className="relative min-h-screen flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/values.png')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#FFB81C] rounded-full mb-4">
                        <FontAwesomeIcon icon={faStar} className="text-white" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">우리의 가치</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl mb-8">
                        공통 옵션에서는 핵심 가치가 우리의 모든 행동과 결정을 이끌어주며 비즈니스를 진행하는 방식을 형성합니다.

                    </p>
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faHandshake} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">존중
                                </h3>
                                <p className="text-lg">우리는 모든 사람의 독특한 기여를 소중히 여기며 각 개인을 최고 수준의 개인적이고 전문적인 예의, 고려, 그리고 배려로 대합니다.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faUserCheck} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">온전함
                                </h3>
                                <p className="text-lg">우리의 관계는 정직함, 진정성, 그리고 투명성을 기반으로 합니다. 우리는 약속을 지키고 약속을 지지며, 모든 상호작용에서 신뢰와 신뢰성을 보장합니다.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faHeart} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">고객 중심</h3>
                                <p className="text-lg">커먼 옵션에서는 내부 팀 구성원이든 외부 고객이든 사람이 최우선입니다. 우리는 모든 전문적인 관계에서 기대를 뛰어넘기 위해 헌신하며, 우수한 가치와 서비스를 제공하기 위해 노력합니다.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faFire} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">열정
                                </h3>
                                <p className="text-lg">우리는 하는 일에 열정적이며, 이 열정이 우리 일의 모든 측면에서 훌륭함을 이끌어냅니다. 이는 의미 있는 결과를 이루고 긍정적인 영향을 미치기 위한 헌신을 촉진합니다.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faChartLine} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">지속적인 개선
                                </h3>
                                <p className="text-lg">우리는 지속적인 성장과 탁월함을 믿습니다. 우리는 변화를 수용하고 개선할 기회를 찾으며, 항상 우수한 해결책과 결과물을 제공하기 위해 스스로에게 도전합니다.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faCog} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">혁신
                                </h3>
                                <p className="text-lg">혁신은 Common Options의 문화 속에 깊이 뿌리박혀 있습니다. 우리는 미래를 내다보며 새로운 아이디어를 실현시키는 데 적극적이고 선도적입니다. 모든 이해관계자들을 위한 독특하고 가치 있는 해결책을 만들어냅니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;