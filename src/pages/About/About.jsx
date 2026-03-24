import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto my-12 px-4 lg:px-0 animate-fade-in">
            {/* Hero Section */}
            <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-6xl font-black text-[#131313]">
                    About <span className="text-[#23BE0A]">Monarch-Reads</span>
                </h1>
                <p className="text-lg text-[#131313cc] leading-relaxed">
                    Welcome to your ultimate sanctuary for stories and knowledge. At Monarch-Reads, we believe that every book has a soul, and every reader deserves a perfect match.
                </p>
            </div>

            {/* Stats Section - Classic Designer Look */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-base-200 p-10 rounded-[32px] text-center shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-5xl font-extrabold text-[#23BE0A] mb-2">500+</h2>
                    <p className="text-xl font-bold text-[#131313]">Premium Books</p>
                </div>
                <div className="bg-base-200 p-10 rounded-[32px] text-center shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-5xl font-extrabold text-[#59C6D2] mb-2">10k+</h2>
                    <p className="text-xl font-bold text-[#131313]">Happy Readers</p>
                </div>
                <div className="bg-base-200 p-10 rounded-[32px] text-center shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-5xl font-extrabold text-[#23BE0A] mb-2">50+</h2>
                    <p className="text-xl font-bold text-[#131313]">Famous Authors</p>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-[#23BE0A0D] p-8 lg:p-16 rounded-[40px]">
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl font-bold text-[#131313]">Our Mission</h2>
                    <p className="text-[#131313b3] text-lg leading-relaxed">
                        Our mission is to make high-quality literature accessible to everyone in Dhaka and beyond. We carefully curate our collection to ensure that whether you are a student, a professional, or a casual reader, you find exactly what you need to grow and escape into a different world.
                    </p>
                    <button className="btn bg-[#23BE0A] border-none text-white px-8 rounded-xl font-bold hover:bg-[#1fa309]">
                        Explore Our Collection
                    </button>
                </div>
                <div className="flex-1">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#23BE0A1A] rounded-full blur-3xl"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800" 
                            alt="Library" 
                            className="relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-20">
                <p className="italic text-gray-400">"A room without books is like a body without a soul." – Cicero</p>
            </div>
        </div>
    );
};

export default About;