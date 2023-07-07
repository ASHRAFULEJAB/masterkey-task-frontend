import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-[#404040] mt-64 md:w-[full] mx-auto flex flex-col justify-between p-6 sm:flex-row">
      <div
        class="container flex flex-col items-center justify-between space-y-4
       sm:space-y-0 sm:flex-row"
      >
        <Link href="#">
          <b className="text-white">shop</b>cart
        </Link>

        <div className="flex">
          <p class="text-sm text-gray-600 dark:text-gray-300 mr-4">About Us</p>
          <p class="text-sm text-gray-600 dark:text-gray-300 mr-4">Contact</p>
          <p class="text-sm text-gray-600 dark:text-gray-300 mr-4 ">Help</p>
        </div>

        <div class="flex -mx-2 text-white">English</div>
      </div>
    </footer>
  );
};

export default Footer;
