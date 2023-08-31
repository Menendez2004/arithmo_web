import React, { useState } from 'react';
import logo from '../img/Arithmo.svg';



// Translation as well -.-
import { useTranslation } from "react-i18next";

export const Nav = () => {
    const { t } = useTranslation();

    let Links = [
        { name: t("index.navbar.home"), link: "/" },
        { name: t("index.navbar.about"), link: "#hola" },
        { name: t("index.navbar.images"), link: "#imagenes" },
        { name: t("index.navbar.compativility"), link: "#compativilidad" },
        { name: t("index.navbar.help"), link: '/help' }

    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full top-0 left-0 opacity-100 z-30 fixed '>
            <div className='md:flex items-center justify-between bg-[#088395] py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]  text-white '>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <img src={logo} width={150} alt=''/>
                        {/* <ion-icon name="logo-ionic"></ion-icon> */}
                    </span>

                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#088395] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-white hover:text-[#05BFDB] hover:bg-white hover:rounded-md hover:p-1 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}
