import React from "react";
import { Link } from "react-router-dom";
import bannarpng from '../../assets/bannar.jpg'; // import করা হয়েছে

const Home = () => {
  return (
    <div className="mt-5">
      {/* Banner Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${bannarpng})` }} 
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Banner Content */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fadeInDown">
            Welcome to The Book Haven
          </h1>
          <p className="text-lg lg:text-2xl mb-6 animate-fadeInUp">
            Discover, Add & Manage Your Favorite Books
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/allBooks"
              className="btn btn-primary btn-lg animate-bounce"
            >
              All Books
            </Link>
            <Link
              to="/addBooks"
              className="btn btn-outline btn-lg animate-bounce delay-150"
            >
              Create Book
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
