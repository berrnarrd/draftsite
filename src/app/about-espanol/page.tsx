import React from 'react';
import Navbar from '../components/Navbar-Espanol';
import Footer from '../components/Footer-Espanol';
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
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Quiénes Somos
                    </h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        Somos una organización de confianza comprometida con la honestidad, la fiabilidad y el servicio transparente, cumpliendo tanto con las pautas de Texas como con las federales, manteniendo los más altos estándares éticos. Nuestra presencia se extiende por varios estados del sur, incluyendo Georgia, Luisiana, Arkansas y Oklahoma. Nos especializamos en servicios completos de contratación y reclutamiento, centrándonos en el sector de la salud, garantizando coincidencias perfectas entre empleadores y profesionales de la salud.

                    </p>
                </section>
            </div>
            <main className="flex-grow">
                <section id="mission" className="relative min-h-screen flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/mission.png')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#FFB81C] rounded-full mb-4">
                        <FontAwesomeIcon icon={faBullseye} className="text-white" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Nuestra Misión</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        Mejoramos la productividad en el lugar de trabajo y fomentamos la colaboración al proporcionar talento de primer nivel y perspectivas estratégicas para optimizar las fuerzas laborales en el sector de la salud. Nuestra cultura basada en valores promueve la innovación, permitiendo que los profesionales de la salud destaquen en la atención al paciente. Conectamos a profesionales de la salud, asociaciones, empleadores, instituciones educativas y socios para ofrecer un apoyo sólido en Arkansas, Georgia, Luisiana, Oklahoma y Texas. Con 25 años de experiencia en asesoría en salud, ofrecemos servicios de consultoría, dotación de personal, fusiones, adquisiciones y gestión empresarial. La honestidad, la fiabilidad y la claridad guían nuestra adherencia a los estándares éticos de Texas y federales.
                    </p>
                </section>
                <section id="vision" className="relative min-h-screen flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/vision.png')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#FFB81C] rounded-full mb-4">
                        <FontAwesomeIcon icon={faEye} className="text-white" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Nuestra Visión</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        Aspiremos a ser el centro donde la industria de la salud se reúna para avanzar en las carreras de los profesionales. Reconocidos como innovadores en soluciones para la fuerza laboral en el sector salud, ayudamos a los proveedores a navegar con éxito en el cambiante panorama de la salud. Atraemos y reclutamos una vasta cantidad de talentos, incluyendo clínicos y médicos altamente capacitados. Nuestro compromiso de invertir en el equipo más talentoso y dedicado de la industria garantiza la entrega constante de un valor superior para los accionistas.
                    </p>
                </section>
                <section id="values" className="relative min-h-screen flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/values.png')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#FFB81C] rounded-full mb-4">
                        <FontAwesomeIcon icon={faStar} className="text-white" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Nuestros Valores</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl mb-8">
                        En Common Options, nuestros valores fundamentales guían cada una de nuestras acciones y decisiones, moldeando la forma en que llevamos a cabo nuestro negocio:
                    </p>
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faHandshake} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">Respeto</h3>
                                <p className="text-lg">Valoramos la contribución única de cada persona y tratamos a cada individuo con el más alto nivel de cortesía, consideración y cuidado personal y profesional.</p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faUserCheck} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">Integridad</h3>
                                <p className="text-lg">Nuestras relaciones se basan en la honestidad, autenticidad y transparencia. Cumplimos nuestros compromisos y mantenemos nuestras promesas, asegurando confianza y fiabilidad en todas nuestras interacciones.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faHeart} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">Enfoque en el Cliente</h3>
                                <p className="text-lg">En Common Options, las personas son lo primero, ya sean miembros internos del equipo o clientes externos. Estamos comprometidos a superar las expectativas en cada relación profesional, esforzándonos por ofrecer un valor y un servicio excepcionales.</p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faFire} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">Pasión</h3>
                                <p className="text-lg">Nos apasiona lo que hacemos, y este entusiasmo impulsa la excelencia en cada aspecto de nuestro trabajo. Alimenta nuestra dedicación a lograr resultados significativos y a tener un impacto positivo.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faChartLine} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">Mejora Continua</h3>
                                <p className="text-lg">Creemos en el crecimiento continuo y la excelencia. Aceptamos el cambio, buscamos oportunidades de mejora y nos desafiamos constantemente a nosotros mismos para ofrecer soluciones y resultados superiores.</p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 m-2 rounded-lg text-center flex flex-col justify-between" style={{ minHeight: '350px' }}>
                            <div>
                                <FontAwesomeIcon icon={faCog} className="text-[#FFB81C] mb-4" style={{ width: '50px', height: '50px' }} />
                                <h3 className="text-xl font-semibold mb-2">Innovación</h3>
                                <p className="text-lg">La innovación está arraigada en nuestra cultura en Common Options. Somos visionarios y proactivos al llevar nuevas ideas a la realidad, creando soluciones únicas y valiosas para todos los interesados.</p>
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