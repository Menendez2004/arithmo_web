import React from 'react'
import { Nav } from '../../assets/components/navbar'
import { Footer } from '../../assets/components/footer'
import { Link } from 'react-router-dom'

import '../../libs/i18n'
import { useTranslation } from "react-i18next";

export const PrivacyPolicy = () => {
    const { t } = useTranslation();
    return (
        <>
            <Nav />
            <div className='bg-[#FFFAF4]  items-center justify-center flex w-full'>
                <div className=' items-center p-[10rem] w-[80rem]'>
                    <h1 className='mb-[2rem] text-[2.5rem] font-bold'>{t("Privacy.tittle")}</h1>
                    <h2 className='font-bold'>{t("Privacy.sub-tittle")}</h2>
                    <p className='text-justify mb-[1rem]'>{t("Privacy.p1")}</p>
                    <p className='text-justify mb-[1rem]'>{t("Privacy.p2")}</p>
                    <p className='text-justify mb-[1rem]'>{t("Privacy.p3")}</p>
                    <div className='mb-[1rem]'>
                        <p>{t("Privacy.p4")}</p>
                        <li className='text-justify '>{t("Privacy.p5")}</li>
                    </div>
                    <p className='text-justify mb-[1rem]'>{t("Privacy.p6")}</p>
                    <p>{t("Privacy.p7")}</p>
                    <Link to="/" class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md w-[12rem] h-[4rem] mt-[2rem] group ">
                        <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#05BFDB] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#05BFDB] rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span class="relative text-[#05BFDB] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white ">{t("Privacy.button")}</span>
                    </Link>
                </div>

            </div>
            <Footer />
        </>

    )
}
