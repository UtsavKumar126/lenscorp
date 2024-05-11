import React from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] flex justify-between items-start p-[2rem]">
        <div className="flex flex-col gap-[2rem]">
          <img
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
            alt="" className="max-w-[80px]"
          />
          <p>Tomorrow's Vision, Today!</p>
          <div className="flex gap-[1rem]">
            <FacebookRoundedIcon fontSize="large"/>
            <XIcon fontSize="large"/>
            <InstagramIcon fontSize="large"/>
            <LinkedInIcon fontSize="large"/>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="font-[600] text-xl">Sitemap</div>
          <a href="" className="mt-7">MakeMyWeb.</a>
          <a href="" className="mt-2">Services</a>
          <a href="" className="mt-2">Products</a>
          <a href="" className="mt-2"> Blogs</a>
          <a href="" className="mt-2">Life at LENS</a>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="font-[600] text-xl">Connect</div>
         <a href="" className="mt-6">+1-517-9300-792</a>
         <a href="" className="mt-2">+91-9990-736-796</a> 
         <a href="" className="mt-2">solutions@lenscorp.ai</a>  
        </div>
      </div>
    </div>
  );
}

export default Footer;
