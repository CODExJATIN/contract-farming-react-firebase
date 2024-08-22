import React from "react";
import './Navbar.css';


const Navbar = () => {
    return(
        <div className="navbar">
        <div className="img">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m24.251 21.37l2.194 1.462A1 1 0 0 0 27.8 22.6l3-4l-1.6-1.2l-2.433 3.244l-2.212-1.476a1 1 0 0 0-1.369.25L20 23.879V16h-2v10a2 2 0 0 0 2 2h10v-2h-9.057zM2 21h14v2H2zm0 5h14v2H2zm9-10v-5h1a4.005 4.005 0 0 0 4-4V4h-3a3.98 3.98 0 0 0-2.747 1.107A6 6 0 0 0 5 2H2v3a6.007 6.007 0 0 0 6 6h1v5H2v2h14v-2zm2-10h1v1a2 2 0 0 1-2 2h-1V8a2 2 0 0 1 2-2M8 9a4.005 4.005 0 0 1-4-4V4h1a4.005 4.005 0 0 1 4 4v1z"/></svg>
        </div>
        <div className="search">
            <div className="searchText">
                <p>Search</p>
            </div>
            <div className="search-icon">
                <img src="https://www.freepnglogos.com/uploads/search-png/search-icon-clip-art-clkerm-vector-clip-art-online-22.png" alt="search-icon"/>
            </div>
        </div>
        <div className="profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity="0.2"/><path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"/></g></svg>
        </div>
    </div>

    );
}

export default Navbar;