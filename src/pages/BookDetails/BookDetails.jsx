import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    
  
   
    const singleBook =Array.isArray(data) && data?.find(book => book.bookId === bookId);

    const { 
        image, bookName, author, category, review, 
        tags, totalPages, publisher, yearOfPublishing, rating 
    } = singleBook || {};

    const handleMarksRead = (id) => {
     
        addToStoredDB(id)
    };

    return (
        <div className="container mx-auto my-12 px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                
                {/* Image Section - Balanced Height & Width */}
                <div className="w-full lg:w-1/2 bg-base-200 rounded-2xl p-12 flex justify-center">
                    <img 
                        className="h-[500px] object-contain shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300" 
                        src={image} 
                        alt={bookName} 
                    />
                </div>

                {/* Details Section */}
                <div className="w-full lg:w-1/2 space-y-4">
                    <h1 className="text-4xl font-bold text-gray-800">{bookName}</h1>
                    <p className="text-xl font-medium text-gray-600">By: {author}</p>
                    
                    <div className="divider"></div>
                    <p className="text-lg font-medium text-gray-500">{category}</p>
                    <div className="divider"></div>
                    
                    <p className="leading-relaxed">
                        <span className="font-bold">Review: </span>{review}
                    </p>

                    <div className="flex items-center gap-4 py-2">
                        <span className="font-bold">Tag:</span>
                        {tags?.map((tag, index) => (
                            <span key={index} className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-sm font-bold">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="divider"></div>

                    {/* Technical Info Table */}
                    <div className="grid grid-cols-2 gap-y-3 max-w-sm">
                        <span className="text-gray-500">Number of Pages:</span>
                        <span className="font-bold text-gray-800">{totalPages}</span>
                        
                        <span className="text-gray-500">Publisher:</span>
                        <span className="font-bold text-gray-800">{publisher}</span>
                        
                        <span className="text-gray-500">Year of Publishing:</span>
                        <span className="font-bold text-gray-800">{yearOfPublishing}</span>
                        
                        <span className="text-gray-500">Rating:</span>
                        <span className="font-bold text-gray-800">{rating}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-6">
                        <button 
                            onClick={() => handleMarksRead(bookId)}
                            className="btn btn-outline px-8 border-gray-300 hover:bg-green-600 hover:border-green-600"
                        >
                            Read
                        </button>
                        <button onClick={()=>handleMarksRead(id)} className="btn bg-[#50B1C9] border-none text-white px-8 hover:bg-[#3f8ea1]">
                            Wishlist
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BookDetails;