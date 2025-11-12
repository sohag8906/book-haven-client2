import React from 'react';
import errorImg from '../../assets/error.webp';

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 text-center">
      <img
        className="w-[400px] h-[300px] mb-4"
        src={errorImg}
        alt="Error Illustration"
      />
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-2 text-gray-600">Page Not Found !!</p>
    </div>
  );
};

export default Error;
