import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Who We Are</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        We are a trusted organization committed to honesty, reliability, and transparent service, adhering to both Texas and federal guidelines while upholding the highest ethical standards. Our footprint spans across several southern states including Georgia, Louisiana, Arkansas, and Oklahoma. We specialize in full-service staffing and recruiting, focusing on healthcare, ensuring seamless matches between employers and healthcare professionals.
                    </p>
                </section>
            </div>
            <main className="flex-grow">
                <section id="mission" className="relative min-h-screen flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/mission.png')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#FFB81C] rounded-full mb-4">
                        <FontAwesomeIcon icon={faBullseye} className="text-white" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Our Mission</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        We enhance workplace productivity and foster collaboration by delivering top-tier talent and strategic insights to optimize healthcare workforces. Our values-driven culture promotes innovation, allowing healthcare professionals to excel in patient care. We connect healthcare professionals, associations, employers, educational institutions, and partners for robust support across Arkansas, Georgia, Louisiana, Oklahoma, and Texas. With 25 years of healthcare advisory experience, we offer consulting, staffing, mergers, acquisitions, and business management services. Honesty, reliability, and clarity guide our adherence to Texas and Federal ethical standards.
                    </p>
                </section>
                <section id="vision" className="relative min-h-screen flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/vision.png')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#FFB81C] rounded-full mb-4">
                        <FontAwesomeIcon icon={faEye} className="text-white" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Our Vision</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        We aspire to be the hub where the healthcare industry convenes to advance professionals' careers. Recognized as innovators in healthcare workforce solutions, we help providers navigate the evolving healthcare landscape successfully. We attract and recruit a vast talent pool of skilled clinicians and physicians. Our commitment to investing in the industry's most talented and dedicated team ensures consistent delivery of superior shareholder value.
                    </p>
                </section>
                <section id="values" className="relative min-h-screen flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/values.png')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#FFB81C] rounded-full mb-4">
                        <FontAwesomeIcon icon={faStar} className="text-white" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl mb-8">
                        At Common Options, our core values guide our every action and decision, shaping the way we conduct business:
                    </p>
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faHandshake} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">Respect</h3>
                                <p className="text-lg">We value everyone’s unique contribution and treat each individual with the highest level of personal and professional courtesy, consideration, and care.</p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faUserCheck} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                                <p className="text-lg">Our relationships are built on honesty, authenticity, and transparency. We uphold our commitments and stand by our promises, ensuring trust and reliability in all our interactions.</p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faHeart} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                                <p className="text-lg">At Common Options, people come first, whether they are internal team members or external clients. We are committed to exceeding expectations in every professional relationship, striving to deliver exceptional value and service.</p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faFire} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                                <p className="text-lg">We are passionate about what we do, and this enthusiasm drives excellence in every aspect of our work. It fuels our dedication to achieving meaningful outcomes and making a positive impact.</p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faChartLine} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                                <p className="text-lg">We believe in continual growth and excellence. We embrace change, seek opportunities for improvement, and consistently challenge ourselves to deliver superior solutions and results.</p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faCog} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                                <p className="text-lg">Innovation is ingrained in our culture at Common Options. We are forward-thinking and proactive in bringing new ideas to life, creating unique and valuable solutions for all stakeholders.</p>
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