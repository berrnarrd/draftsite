import React from 'react';
import Navbar from '../components/Navbar-Espanol';
import Footer from '../components/Footer-Espanol';
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
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        Ofrecemos una variedad de servicios para ayudar a las organizaciones de salud a prosperar. Nuestros servicios incluyen:
                    </p>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full px-4 md:px-8">
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faHandshake} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Fusiones y Adquisiciones</h3>
                            <p className="text-lg">Apoyamos a las empresas de salud en fusiones y adquisiciones mediante la creación de memorandos confidenciales, la conexión con compradores, la gestión de negociaciones y la supervisión de actividades previas al cierre. Nuestra experiencia en la industria garantiza valoraciones precisas y perspectivas estratégicas para mejorar el valor de su empresa. Confíe en Common Options para una transición sin problemas y para maximizar el valor de su negocio.</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faUsers} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Dotación de Personal y Colocación</h3>
                            <p className="text-lg">Ofrecemos consultoría estratégica en dotación de personal para optimizar la planificación de la fuerza laboral, mejorar la eficiencia y abordar desafíos de personal. Nuestros servicios incluyen análisis de la fuerza laboral, planificación de sucesiones y orientación en cumplimiento normativo. En Common Options, ofrecemos soluciones de dotación de personal confiables y acceso a una red de talentosos profesionales de la salud para ayudar a su organización a sobresalir en la atención al paciente y las operaciones.</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faBriefcase} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Negocios y Corretaje</h3>
                            <p className="text-lg">Common Options se especializa en corretaje de atención médica, ofreciendo soluciones expertas de dotación de personal y apoyo para fusiones y adquisiciones. Ayudamos a los proveedores de atención médica a adquirir talento y optimizar el rendimiento. Con nuestra experiencia en la industria y conocimiento de las regulaciones de salud, ofrecemos soluciones a medida. Confíe en Common Options para mejorar la eficiencia en la dotación de personal y impulsar el éxito en la prestación de servicios de salud.</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faBullhorn} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Enlace Profesional y Marketing</h3>
                            <p className="text-lg">En Common Options, alineamos su misión con empresas impactantes a través de la planificación estratégica, el desarrollo colaborativo y la ejecución digital experta. Guiamos la estrategia de marca y aseguramos la consistencia en todas las plataformas. Con un apoyo dedicado al cliente y soluciones personalizadas, ayudamos a elevar su presencia y a lograr un crecimiento sostenible en el competitivo mercado actual.</p>
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
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Nuestro Enfoque Integral para Lograr Resultados</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        Nuestro método está diseñado para lograr resultados sobresalientes mediante:
                    </p>
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full px-4 md:px-8">
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faPeopleArrows} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Enfoque de Asociación Estratégica</h3>
                            <p className="text-lg">Common Options se especializa en forjar asociaciones estratégicas para organizaciones de salud, facilitando fusiones y adquisiciones que optimizan operaciones e impulsan el crecimiento. Evaluamos objetivos, identificamos socios adecuados y gestionamos el proceso desde la negociación hasta la integración, asegurando transiciones fluidas y maximizando sinergias para el éxito a largo plazo.</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faUsers} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Enfoque de Soluciones de Dotación de Personal Especializadas</h3>
                            <p className="text-lg">En Common Options, ofrecemos soluciones de dotación de personal a medida, diseñadas para satisfacer las necesidades únicas de los proveedores de atención médica. Ya sea que necesite personal temporal para demandas estacionales o colocaciones permanentes para roles críticos, nuestro riguroso proceso de selección garantiza que asignemos profesionales capacitados que se ajusten a la cultura de su organización, mejorando la continuidad de la atención y la eficiencia operativa.</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col justify-between">
                            <FontAwesomeIcon icon={faChartLine} className="text-[#FFB81C] mb-4" style={{ width: '40px', height: '40px' }} />
                            <h3 className="text-xl font-semibold mb-2">Enfoque de Experiencia en Fusiones y Adquisiciones</h3>
                            <p className="text-lg">Aprovechando nuestra profunda experiencia en fusiones y adquisiciones en el sector de la salud, nuestra empresa ofrece orientación estratégica a lo largo de todo el ciclo de vida de M&A. Desde la identificación de objetivos y la debida diligencia hasta la negociación y la planificación de la integración, navegamos por las complejidades para lograr transacciones exitosas que impulsan la creación de valor y fomentan el crecimiento organizacional en un panorama de salud competitivo.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Services;