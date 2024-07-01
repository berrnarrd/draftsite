import React from 'react';
import Navbar from '../components/Navbar-Korean';
import Footer from '../components/Footer-Korean';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLightbulb, faHandshake, faUsers, faChartLine, faBullhorn, faPeopleArrows, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Services: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col bg-[#006D5B] text-white">
            <div className="relative w-full bg-cover bg-center bg-no-repeat flex-grow" style={{ backgroundImage: "url('/services.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <Navbar />
                <section id="our-services" className="relative flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 mt-[-64px]">
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#FFB81C] rounded-full mb-4">
                        <FontAwesomeIcon icon={faCogs} className="text-white" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">우리의 서비스
                    </h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        의료기관이 번창할 수 있도록 다양한 서비스를 제공합니다. 저희 서비스에는 다음이 포함됩니다:

                    </p>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full px-4 md:px-8">
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faHandshake} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">합병과 인수
                            </h3>
                            <p className="text-lg">우리는 의료기업의 합병 및 인수를 지원하기 위해 비밀 보고서를 작성하고 구매자와 연결하며 협상을 관리하고 폐쇄 전 활동을 감독합니다. 산업 전문 지식을 통해 정확한 가치 평가와 전략적 통찰력을 제공하여 귀사의 가치를 향상시킵니다. 원활한 전환과 비증가를 극대화하기 위해 Common Options를 신뢰해 주세요.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faUsers} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">인력 고용 및 배치
                            </h3>
                            <p className="text-lg">저희는 전략적 직원 고용 상담을 제공하여 인력 계획을 최적화하고 효율성을 향상시키며 직원 고용에 대한 도전에 대처합니다. 저희의 서비스에는 인력 분석, 연속 계획 및 규정 준수 지침이 포함됩니다. Common Options에서는 신뢰할 수 있는 직원 고용 솔루션과 재능 있는 의료 전문가 네트워크에 접근하여 귀하의 조직이 환자 치료 및 운영에서 뛰어날 수 있도록 도와드립니다.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faBriefcase} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">비즈니스와 중개
                            </h3>
                            <p className="text-lg">커먼 옵션은 의료 중개에 특화되어 있으며 전문 인력 공급 솔루션과 합병 및 인수를 위한 지원을 제공합니다. 우리는 의료 공급 업체가 인재를 확보하고 성과를 최적화하는 데 도움을 줍니다. 우리의 산업 전문 지식과 의료 규정에 대한 이해를 바탕으로 맞춤형 솔루션을 제공합니다. 커먼 옵션을 신뢰하여 인력 효율성을 향상시키고 의료 서비스의 성공을 이끌어내세요.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faBullhorn} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">전문 연락 및 마케팅
                            </h3>
                            <p className="text-lg">커먼 옵션에서는 전략적 계획, 협력 개발 및 전문 디지털 실행을 통해 귀하의 미션을 영향력 있는 비즈니스와 조화롭게 조율합니다. 브랜드 전략을 지원하고 플랫폼 간 일관성을 보장합니다. 특별한 고객 지원과 맞춤형 솔루션을 통해 귀하의 존재감을 높이고 오늘날의 경쟁적 시장에서 지속 가능한 성장을 이룰 수 있도록 도와드립니다.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <main className="flex-grow">
                <section id="our-approach" className="relative flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/approach.png')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#FFB81C] rounded-full mb-4">
                        <FontAwesomeIcon icon={faLightbulb} className="text-white" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">우리의 결과물 전달에 대한 원활한 접근 방식
                    </h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        우리의 방법은 우수한 결과를 달성하기 위해 만들어졌습니다.

                    </p>
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full px-4 md:px-8">
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faPeopleArrows} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">전략적 파트너십 접근 방식
                            </h3>
                            <p className="text-lg">커먼 옵션은 의료 기관을 위한 전략적 파트너십을 구축하고, 운영을 최적화하고 성장을 촉진하는 합병 및 인수를 촉진하는 전문가입니다. 우리는 목표를 평가하고 적합한 파트너를 식별하며, 협상부터 통합까지의 과정을 관리하여 원활한 전환을 보장하고 장기적인 성공을 위해 시너지를 극대화합니다.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faUsers} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">전문 인력 고용 솔루션 접근법
                            </h3>
                            <p className="text-lg">커먼 옵션에서는 의료 공급 업체의 독특한 요구 사항을 충족시키기 위해 설계된 맞춤형 인력 공급 솔루션을 제공합니다. 계절적 수요를 충족하기 위한 임시 인력이 필요하거나 중요한 역할을 위한 영구적인 배치가 필요한 경우, 엄격한 선별 과정을 통해 숙련된 전문가들을 귀하의 조직 문화와 일치시키고 치료의 연속성과 운영 효율성을 향상시킵니다.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faChartLine} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">합병 및 인수 전문 지식 접근법
                            </h3>
                            <p className="text-lg">의료 부문 합병 및 인수에 대한 심도 있는 전문 지식을 활용하여, 저희 회사는 M&amp;A 수명주기 전반에 걸쳐 전략적인 지도를 제공합니다. 대상 식별 및 실사부터 협상 및 통합 계획까지, 우리는 복잡성을 극복하여 가치 창출을 촉진하고 경쟁적인 의료 환경에서 조직 성장을 촉진하는 성공적인 거래를 이끌어냅니다.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Services;