import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';




const RootLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <header>
             <Navbar></Navbar>
            
            </header>
            
            <Outlet></Outlet>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;