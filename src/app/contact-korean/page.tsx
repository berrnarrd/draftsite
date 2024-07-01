"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar-Korean';
import Footer from '../components/Footer-Korean';

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.send(
            'service_5pr6vkl',
            'template_gce56fh',
            {
                from_name: formState.name,
                message: formState.message,
                email: formState.email,
            },
            'AOisRiq_Wl-q0si93'
        ).then((result) => {
            console.log(result.text);
            setFormState({
                name: '',
                email: '',
                message: ''
            });
            router.push('/message-sent-korean');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message. Please try again later.');
        });
    };

    return (
        <div className="relative min-h-screen flex flex-col bg-[#006D5B] text-white">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 md:px-8 md:py-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">연락처
                </h2>
                <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-white bg-opacity-20 p-6 rounded-lg">
                    <div className="w-full lg:w-1/2 p-4">
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <div className="flex flex-col">
                                <label className="text-lg font-semibold mb-2">이름
                                </label>
                                <input type="text" name="name" value={formState.name} onChange={handleChange} className="p-3 rounded bg-gray-200 text-black" required />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-lg font-semibold mb-2">이메일
                                </label>
                                <input type="email" name="email" value={formState.email} onChange={handleChange} className="p-3 rounded bg-gray-200 text-black" required />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-lg font-semibold mb-2">메시지
                                </label>
                                <textarea name="message" value={formState.message} onChange={handleChange} rows={5} className="p-3 rounded bg-gray-200 text-black" required></textarea>
                            </div>
                            <button type="submit" className="p-3 rounded bg-[#FFB81C] text-white font-semibold">메시지 보내기
                            </button>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                        <iframe
                            className="w-full h-full rounded"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8437795209224!2d-96.99932861328125!3d32.67580032348633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9b22ab25c553%3A0x4b26e9aee93e8c8!2s32.67580032348633%2C%20-96.99932861328125!5e0!3m2!1sen!2sus!4v1611819021661!5m2!1sen!2sus"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;