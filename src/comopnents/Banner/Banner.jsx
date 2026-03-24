import React from 'react';
import bookimage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="container mx-auto px-4 lg:px-0">
            <div className="hero bg-base-200 min-h-[600px] rounded-[32px] my-10 overflow-hidden">
                <div className="hero-content flex-col lg:flex-row-reverse gap-12 p-8 lg:p-20">
                    
                    {/* Image Section: Perfect ratio and shadow */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src={bookimage}
                            alt="Featured Books"
                            className="w-full max-w-[400px] h-auto object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] transform hover:-translate-y-2 transition-transform duration-500"
                        />
                    </div>

                    {/* Text Section: Optimized Typography */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#131313] leading-tight">
                            Books to freshen up <br /> 
                            your bookshelf
                        </h1>
                        <p className="py-8 text-lg text-[#131313cc] max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Discover a world of stories and knowledge. Whether you're looking for a thrilling mystery or a deep dive into history, we have the perfect book for you.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <button className="btn btn-primary bg-[#23BE0A] border-none hover:bg-[#1fa309] text-white px-8 text-lg font-bold transition-all">
                                View The List
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    
    );
};

export default Banner;