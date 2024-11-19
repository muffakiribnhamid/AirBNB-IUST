import React from 'react';

const Review = () => {
  return (
    <div className="max-w-xs overflow-hidden bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 m-10 hover:shadow-lg hover:scale-105 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md" />
      <div className="p-6 relative z-10">
        <p className="text-xl font-semibold text-gray-800">Amazing</p>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium id est fugit amet! Laborum nesciunt exercitationem eum aut officia sint..
        </p>
        <div className="flex items-center mt-4 text-gray-600">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-yellow-500">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="ml-2">4.8 (24 reviews)</span>
        </div>
      </div>
    </div>
  );
}

export default Review;
