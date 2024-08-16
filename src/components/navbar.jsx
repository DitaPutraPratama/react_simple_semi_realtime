import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from "@phosphor-icons/react";

function Navbar() {
    return (
        <header className=" bg-teal-300 text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-6">
                    <Leaf size={32} />
                    <span className="ml-1 text-2xl">Air Guard</span>
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-base">
                    <Link to={'/'} className="mr-1 px-4 py-2 bg-teal-300 text-black font-bold hover:text-white rounded-lg hover:bg-teal-500 transition duration-300">Home</Link>
                    <Link to={'/detail'} className="mr-1 px-4 py-2 bg-teal-300 text-black font-bold hover:text-white rounded-lg hover:bg-teal-500 transition duration-300">Detail</Link>
                    <Link to={'/about'} className="mr-1 px-4 py-2 bg-teal-300  text-black font-bold hover:text-white rounded-lg hover:bg-teal-500 transition duration-300">About</Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
