import React from "react";
import { Link } from "react-router-dom";


import banner1 from "../../assets/bannar.jpg";
import banner2 from "../../assets/bannar 2.jpg";
import banner3 from "../../assets/bannar3.jpg";
import banner4 from "../../assets/bannar 4.jpg";


import image from "../../assets/images2 (7).jpg";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  return (
    <div className="mt-5">

     
      <section className="relative h-[70vh]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
              style={{ backgroundImage: `url(${banner1})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative text-center text-white px-4">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  Welcome to The Book Haven
                </h1>
                <p className="text-lg lg:text-2xl mb-6">
                  Discover, Add & Manage Your Favorite Books
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/allBooks" className="btn btn-primary btn-lg">
                    All Books
                  </Link>
                  <Link to="/addBooks" className="btn btn-primary btn-lg">
                    Create Book
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
              style={{ backgroundImage: `url(${banner2})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative text-center text-white px-4">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  Explore Endless Stories
                </h1>
                <p className="text-lg lg:text-2xl mb-6">
                  Your next favorite book is waiting
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/allBooks" className="btn btn-primary btn-lg">
                    All Books
                  </Link>
                  <Link to="/addBooks" className="btn btn-primary btn-lg">
                    Create Book
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

           {/* Slide 3*/}
          <SwiperSlide>
            <div
              className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
              style={{ backgroundImage: `url(${ banner3})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative text-center text-white px-4">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  Read. Add. Share.
                </h1>
                <p className="text-lg lg:text-2xl mb-6">
                  Join our community of book lovers
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/allBooks" className="btn btn-primary btn-lg">
                    All Books
                  </Link>
                  <Link to="/addBooks" className="btn btn-primary btn-lg">
                    Create Book
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div
              className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
              style={{ backgroundImage: `url(${banner4})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative text-center text-white px-4">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  Welcome to The Book Haven
                </h1>
                <p className="text-lg lg:text-2xl mb-6">
                  Discover, Add & Manage Your Favorite Books
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/allBooks" className="btn btn-primary btn-lg">
                    All Books
                  </Link>
                  <Link to="/addBooks" className="btn btn-primary btn-lg">
                    Create Book
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      
      <section className="my-10 px-6 bg-gray-200  dark:bg-gray-800 py-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          Book of the Week
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={image}
            alt="Book of the Week"
            className="w-150 h-90 object-cover rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-primary">
              The Great Gatsby
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              A timeless story about wealth, love, and the American dream — 
              beautifully written by F. Scott Fitzgerald. This week's featured
              book will inspire readers with its classic tale of ambition and
              romance.
            </p>
            <p>
           The Book Haven isn’t just a library — it’s a community built by readers, <br />   for readers. We celebrate every voice, <br /> every story, and every shared moment of discovery.
        </p>
          </div>
        </div>
      </section>

      
      <section className="my-10 px-6 py-10 bg-gray-200 dark:bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          About The Book Haven
        </h2>
        <div className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-200 space-y-4">
          <p>
            The Book Haven is your ultimate digital library, where book lovers can explore, add, and manage their favorite books. Whether you're into fantasy, mystery, romance, or science fiction, we provide a space to discover new reads and keep track of your personal collection.
          </p>
          <p>
            Our mission is to connect readers with books they’ll love, provide a seamless way to manage your collection, and celebrate the joy of reading. Join our community and be part of The Book Haven today! 
          </p>
          
        </div>
      </section>

    </div>
  );
};

export default Home;
