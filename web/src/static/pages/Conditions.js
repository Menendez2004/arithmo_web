import React from 'react'
import { Nav } from '../../assets/components/navbar'
import logo from '../../assets/img/logo-ofi.svg'
import { Footer } from '../../assets/components/footer'


import '../../libs/i18n'
import { useTranslation } from "react-i18next";


export const Conditions = () => {
    const { t } = useTranslation();
    return (
        <>
            <Nav />
            <div className='bg-[#FFFAF4]'>
                <div className='flex justify-between align-center p-[10rem]'>             
                    <div className='w-[40rem]'>
                        <h1 className='mb-[2rem] text-[2.5rem] font-bold'>{t("Condition.tittle")}</h1>
                        <h2 className='font-bold'>{t("Condition.sub-tittle")}</h2>
                        <p className='text-justify mb-[1rem]'>{t("Condition.p1")}</p>
                        <p className='text-justify mb-[1rem]'>{t("Condition.p2")}</p>
                        <p className='text-justify'>{t("Condition.p3")}</p>
                    </div>
                    <div className='mr-[8rem] flex '>
                        <img src={logo} className='w-[20rem] ml-[10rem] mt-[6rem]' alt='' />
                    </div>
                </div>
                
            </div>

            <Footer />
        </>
    )
}
