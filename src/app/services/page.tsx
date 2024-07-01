import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        We provide a range of services to help healthcare organizations thrive. Our services include:
                    </p>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full px-4 md:px-8">
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faHandshake} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Merger and Acquisition</h3>
                            <p className="text-lg">We support healthcare businesses in mergers and acquisitions by creating confidential memoranda, connecting with buyers, managing negotiations, and overseeing pre-closing activities. Our industry expertise ensures accurate valuations and strategic insights to enhance your company’s value. Trust Common Options for a smooth transition and maximizing your business’s worth.</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faUsers} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Staffing and Placement</h3>
                            <p className="text-lg">We provide strategic staffing consultation to optimize workforce planning, improve efficiency, and address staffing challenges. Our services include workforce analytics, succession planning, and compliance guidance. At Common Options, we offer reliable staffing solutions and access to a network of talented healthcare professionals to help your organization excel in patient care and operations.</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faBriefcase} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Business and Brokerage</h3>
                            <p className="text-lg">Common Options specializes in healthcare brokerage, providing expert staffing solutions and support for mergers and acquisitions. We help healthcare providers acquire talent and optimize performance. With our industry expertise and knowledge of healthcare regulations, we deliver tailored solutions. Trust Common Options to enhance staffing efficiency and drive success in healthcare delivery.</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faBullhorn} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Professional Liaison and Marketing</h3>
                            <p className="text-lg">At Common Options, we align your mission with impactful businesses through strategic planning, collaborative development, and expert digital execution. We guide brand strategy and ensure consistency across platforms. With dedicated client support and tailored solutions, we help elevate your presence and achieve sustainable growth in today’s competitive marketplace.</p>
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
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Our Seamless Approach to Delivering Results</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        Our method is crafted to achieve outstanding outcomes through:
                    </p>
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full px-4 md:px-8">
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faPeopleArrows} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Strategic Partnership Approach</h3>
                            <p className="text-lg">Common Options specializes in forging strategic partnerships for healthcare organizations, facilitating mergers and acquisitions that optimize operations and drive growth. We assess goals, identify suitable partners, and manage the process from negotiation to integration, ensuring seamless transitions and maximizing synergies for long-term success.</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faUsers} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Specialized Staffing Solutions Approach</h3>
                            <p className="text-lg">At Common Options, we offer tailored staffing solutions designed to meet the unique needs of healthcare providers. Whether you require temporary staffing for seasonal demands or permanent placements for critical roles, our rigorous screening process ensures we match skilled professionals with your organizational culture, enhancing continuity of care and operational efficiency.</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faChartLine} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Mergers and Acquisitions Expertise Approach</h3>
                            <p className="text-lg">Leveraging our deep expertise in healthcare mergers and acquisitions, our company provides strategic guidance throughout the M&A lifecycle. From target identification and due diligence to negotiation and integration planning, we navigate complexities to deliver successful transactions that drive value creation and foster organizational growth in a competitive healthcare landscape.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Services;