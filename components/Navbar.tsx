"use client";
import React, { useState } from 'react';
import Link from 'next/link';

type DropdownItems = {
  [key: string]: string[];
};

type Props = {};

const Navbar = (props: Props) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Define dropdown items with type
  const dropdownItems: DropdownItems = {
    'Admission 2024': ['Apply Now', 'Admission Requirements', 'Contact Admissions'],
    'About-Us': ['Our History', 'Mission & Vision', 'Meet the Team'],
    'Courses Offered': ['B.Tech', 'Diploma', 'Certifications'],
    'MIET Campus': ['Campus Tour', 'Facilities', 'Location'],
    'Student Facilities': ['Library', 'Hostel', 'Sports'],
    'Schemes': ['Scholarships', 'Financial Aid', 'Discounts'],
    'Training & Placement': ['Internships', 'Job Placements', 'Career Counseling'],
    'Media': ['News', 'Press Releases', 'Events'],
    'Activities': ['Cultural Events', 'Sports Events', 'Workshops'],
    'News': ['Latest Updates', 'Announcements', 'Articles'],
    'Our Campus': ['Campus Life', 'Student Testimonials', 'Virtual Tour']
  };

  return (
    <nav className='top-0 sticky z-999'>
      {/* First Part */}
      <div className='flex border-b-2 bg-white'>
        <div className="grid grid-cols-2">
          <div className="flex gap-2">
            <div className="bg-formal_red w-[200px] lg:flex justify-center items-center rounded-br-[4rem] hidden">
              <h1 className='font-bold text-white font-2xl text-center'>Notifications</h1>
            </div>
            <h1 className='text-formal_red font-xl font-semibold text-center mt-3 hidden md:block'>
              Admission open in diploma 2024-2025 Season
            </h1>
            <div className="flex justify-center items-center">
              <button className='bg-yellow-400 mt-2 mb-3 p-1 rounded-full border-2 border-formal_red animate-blink'>
                <p className='text-formal_red font-bold'>New</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-end">
          <div className="flex items-center gap-3 mt-4 mb-2 md:mb-0">
            <Link href='/' className='md:font-bold text-md hover:text-formal_red md:font-xl text-sm'>B.Tech Course</Link>
            <Link href='/' className='md:font-bold text-md hover:text-formal_red md:font-xl text-sm'>Diploma Course</Link>
            <Link href='/' className='md:font-bold text-md hover:text-formal_red md:font-xl text-sm'>Hostel Facility</Link>
            <Link href='/' className='md:font-bold text-md hover:text-formal_red md:font-xl text-sm'>Scholarship Facility</Link>
          </div>
          <div className="bg-formal_red rounded-bl-full lg:flex items-center hidden">
            <h1 className='text-white font-bold text-center'>Admission Open in B.Tech & Diploma 2024-2025</h1>
          </div>
        </div>
      </div>

      {/* Second Part */}
      <div className="grid grid-cols-2 border-b-2 bg-white">
        <div className="flex flex-start mt-1 lg:ml-2 ml-0">
          <img src="./logo.png" className='md:h-[70px] h-[30px]' alt="logo" />
          <img src="./aicte-removebg-preview.png" className='md:h-[70px] h-[30px]' alt="" />
        </div>
        <div className="flex justify-end">
          <button className='md:p-5 pl-5 pr-5 pt-1 pb-1 bg-formal_red rounded-xl mt-1 hidden md:block'>
            <h1 className='text-white md:text-2xl font-sm animate-blink font-bold'>Pay Now</h1>
          </button>
          <div className="flex justify-center md:gap-2">
            <div className="flex flex-col md:mr-2 md:ml-2 mt-1">
              <h1 className='text-sm md:font-bold font-sm'>Admission Only</h1>
              <h1 className='font-bold text-formal_red md:text-xl text-sm'>918336070583</h1>
            </div>
            <div className="mr-2 ml-2">
              <h1 className='text-sm md:font-bold font-sm'>Other Queries</h1>
              <h1 className='font-bold text-formal_red md:text-xl text-sm'>918336070583</h1>
            </div>
            <div className="bg-yellow-400 rounded-bl-[4rem] w-[200px] lg:flex justify-center items-center ml-2 hidden">
              <h1 className='text-formal_red font-bold text-2xl animate-bounce'>Apply Now</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Menu for Small Devices */}
      <div className="flex lg:hidden">
        <button 
          className="p-2 focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={() => setIsSidebarOpen(false)}>
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 p-4">
            <div className="flex flex-col gap-3 items-start h-full">
              <Link href='/' className='flex justify-center items-center gap-2 text-formal_red hover:underline'>Admission 2024</Link>
              <Link href='/' className='flex justify-center items-center gap-2 text-formal_red hover:underline'>About-Us</Link>
              <Link href='/' className='flex justify-center items-center gap-2 text-formal_red hover:underline'>Courses Offered</Link>
              <Link href='/' className='flex justify-center items-center gap-2 text-formal_red hover:underline'>MIET Campus</Link>
              <Link href='/' className='flex justify-center items-center gap-2 text-formal_red hover:underline'>Student Facilities</Link>
              <Link href='/' className='flex justify-center items-center gap-2 text-formal_red hover:underline'>Schemes</Link>
              <Link href='/' className='flex justify-center items-center gap-2 text-formal_red hover:underline'>Training & Placement</Link>
              <Link href='/' className='flex justify-center items-center gap-2 text-formal_red hover:underline'>Media</Link>
              <Link href='/' className='flex justify-center items-center gap-2 text-formal_red hover:underline'>Activities</Link>
              <Link href='/' className='flex justify-center items-center gap-2 text-formal_red hover:underline'>News</Link>
              <Link href='/' className='flex justify-center items-center gap-2 text-formal_red hover:underline'>Our Campus</Link>
            </div>
          </div>
        </div>
      )}

      {/* Third Part for Larger Devices */}
      <div className="hidden lg:flex justify-center gap-3 items-center h-[50px] bg-formal_red text-white font-bold">
        {Object.keys(dropdownItems).map((item) => (
          <div key={item} className="relative group">
            <button 
              onClick={() => handleDropdownToggle(item)}
              className="flex items-center gap-2"
            >
              {item}
              <img src="./down_arrow.svg" className='h-[13px] w-[13px]' alt="down arrow" />
            </button>
            {openDropdown === item && (
              <div className="absolute bg-white text-black mt-2 rounded-md shadow-lg w-48">
                {dropdownItems[item].map((submenuItem, index) => (
                  <Link key={index} href="#" className="block px-4 py-2 hover:bg-gray-200">{submenuItem}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
