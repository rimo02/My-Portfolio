import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { ContactFormData } from '../../types';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState<{
        submitted: boolean;
        success: boolean;
        message: string;
    }>({
        submitted: false,
        success: false,
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setFormStatus({
            submitted: true,
            success: true,
            message: 'Your message has been sent! I\'ll get back to you soon.'
        });

        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        setTimeout(() => {
            setFormStatus({
                submitted: false,
                success: false,
                message: ''
            });
        }, 5000);
    };

    return (
        <div className="flex justify-center min-h-screen py-10">
            <div className='flex flex-col gap-6 p-5 w-[80%]'>
                {/* Contact Form */}
                <div className="p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="john.doe@example.com"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                placeholder="Hello, I'd like to talk about..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 flex gap-5 bg-blue-600 px-2 py-2 rounded-md shadow-md hover:bg-blue-800 cursor-pointer"
                        >
                            <Send className="h-5 w-5" />
                            Send Message
                        </button>

                        {formStatus.submitted && (
                            <div className={`mt-4 p-4 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300' : 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300'}`}>
                                {formStatus.message}
                            </div>
                        )}
                    </form>
                </div>
                {/* Contact Information */}
                <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400">
                                    <Mail className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                                <a
                                    href="mailto:contact@example.com"
                                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    ghoshrimo02@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400">
                                    <Phone className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                                <a
                                    href="tel:+1234567890"
                                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    +91 70031 63559
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;