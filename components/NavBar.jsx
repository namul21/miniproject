import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">OZ Movie</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-yellow-400">메인</Link>
        <Link to="/search" className="hover:text-yellow-400">검색</Link>
      </div>
    </nav>
  );
};

export default NavBar;
