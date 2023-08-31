import React from 'react'
import video from '../video/fondo.mp4'
import logo from '../img/logo-ofi.svg'
import { Link } from 'react-router-dom';

//responsive
// import '../css/responsive.css';


// Translation as well -.-
import { useTranslation } from "react-i18next";

export const Header = () => {
    const { t } = useTranslation();

    return (
        <>
            <header className='bg-black '>
                <div className='w-full mt-[4.97rem] md:opacity-75 '>
                    <div className='absolute z-20    justify-center items-center max-w-md mx-auto translate-x-[-2rem] '>
                        <div className='md:flex  w-full  m-6 p-6'>
                            <div className='md:shrink-0 mt-[5rem]'>
                                <h1 className='font-black text-[#05BFDB] text-[7rem] font-[Times New Roman]'>{t("index.header.tittle")}</h1>
                                <Link to="/download" class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md w-[12rem] h-[4rem] mt-[2rem] group ">
                                    <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#05BFDB] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                    <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                    <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#05BFDB] rounded-md opacity-0 group-hover:opacity-100 "></span>
                                    <span class="relative text-[#05BFDB] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white ">{t("index.header.download")}</span>
                                </Link>
                            </div>
                            
                        </div>
                        <div className='hola'>
                                <img src={logo} width={305} className='flex relative z-30  mt-[-16.5rem]  translate-x-[70rem] logo-header' alt=''/>
                        </div>
                    </div>
                    <div className=''>
                        <video autoPlay loop muted src={video} type="video/mp4" className='w-full ' />
                    </div>

                </div>

            </header>
        </>
    )
}
