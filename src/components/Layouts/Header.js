import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo.png';
import { Search } from './../Sections/Search';
import { DropdownLoggedOut, DropdownLoggedIn } from './../index';

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  );
  const [showSearch, setShowSearch] = useState(JSON.parse(false));
  const [dropdown, setDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem('token'));

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <header>
      <nav className='bg-white border-gray-200 dark:bg-gray-900'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
          <Link
            to=''
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img src={logo} className='h-8' alt='Bookshop Logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Bookshop
            </span>
          </Link>
          <div className='flex items-center'>
            <span
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected'
            ></span>
            <span
              onClick={() => {
                setShowSearch(!showSearch);
              }}
              className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search'
            ></span>
            <Link to='/cart' className='text-gray-700 dark:text-white mr-5'>
              <span className='text-2xl bi bi-cart-fill relative'>
                <span className='text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full '>
                  0
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropdown)}
              className='bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white'
            ></span>
            {dropdown &&
              (token ? (
                <DropdownLoggedIn setDropdown={setDropdown} />
              ) : (
                <DropdownLoggedOut setDropdown={setDropdown} />
              ))}
          </div>
        </div>
      </nav>
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </header>
  );
};
