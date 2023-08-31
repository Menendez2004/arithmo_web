import React from 'react'
import logo from '../../assets/img/logo-empre.svg'
import { Nav } from '../../assets/components/navbar'
import { Footer } from '../../assets/components/footer'


import "../../libs/i18n"
import { useTranslation } from 'react-i18next'

export const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <>
            <Nav />
            <div className='bg-[#FFFAF4]'>
                <div className='flex justify-between align-center p-[10rem]'>
                    <div className='w-[40rem]'>
                        <h1 className='mb-[2rem] text-[2.5rem] bold '>{t("AboutUs.tittle")}</h1>
                        <h2 className='bold text-[1.5rem]'>{t("AboutUs.sub-tittle")}</h2>
                        <p className='text-justify mb-[1rem]'>{t("AboutUs.p")}</p>
                    </div>
                    <div className='mr-[8rem] flex '>
                        <img src={logo} className='w-[20rem] ml-[10rem] mt-[6rem]' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
