import React, { useEffect, useState } from "react";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled && "header__scrolled"}`}>
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="header__logo"
        />
        <nav className="header__nav">
          <a href="/">Home</a>
          <a href="/tv">TV Shows</a>
          <a href="/movies">Movies</a>
          <a href="/latest">New & Popular</a>
        </nav>
      </div>
      <div className="header__right">
        <FaSearch className="header__icon" />
        <FaBell className="header__icon" />
        <div className="header__profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile"
          />
          <FaCaretDown className="header__dropdown" />
        </div>
      </div>
    </header>
  );
};

export default Header;
