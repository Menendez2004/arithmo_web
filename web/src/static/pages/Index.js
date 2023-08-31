import React from 'react'

// import "../../css/style.css";

import { Nav } from '../../assets/components/navbar'
import { Header } from '../../assets/components/header'
import { Footer } from '../../assets/components/footer'
import cuaderno from '../../assets/img/cuaderno-bg.png'

//style
import '../../assets/css/style.css'

//Translate
import "../../libs/i18n";
import { useTranslation } from "react-i18next";

//Imagenes
const mockups = require.context('../../assets/img/mockups', true);
const plataformas = require.context('../../assets/img', true);

export const Index = () => {

    const { t } = useTranslation();
    return (
        <>
            <div className='bg-[#088395]'>
                <p id='inicio'></p>
                <Nav />
                <Header />
                <div className='lg:flex bg-white'>
                    <div>
                        <img src={cuaderno} alt='' />
                    </div>
                    <p id='hola'></p>
                    <div className='max-w-md mx-auto mt-[5rem]'>
                        <h1 className='font-[Poppins] text-[2rem]'>{t("index.about.tittle")}</h1>
                        <p className='text-justify font-[Poppins] '>{t("index.about.text")}</p>
                    </div>
                </div>
                <p id='imagenes'></p>
                <div className='bg-white h-auto w-full'>
                    <div className='mb-[8rem] '>
                        <h1 className='text-center text-[#05BFDB] font-bold text-[2rem] translate-y-[3rem]'>{t("index.image.tittle")}</h1>
                    </div>
                    <div class="grid lg:gap-4 lg:grid-cols-4  md:grid-cols-3">
                        <section class="mx-auto w-fit sm:mb-[2rem] max-[639px]:mb-[2rem]">
                            <div class="w-72 h-fit group">
                                <div class="relative overflow-hidden">
                                    <img class=" w-full object-cover border" src={mockups('./mockup1.png')} alt="" />
                                    <div class="absolute lg:h-full lg:w-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h3 class=" py-2 px-5 font-bold text-[#05BFDB]">{t("index.image.login")}</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="mx-auto w-fit sm:mb-[2rem] max-[639px]:mb-[2rem]">
                            <div class="w-72 h-fit group">
                                <div class="relative overflow-hidden">
                                    <img class=" w-full object-cover border" src={mockups('./mockup2.png')} alt="" />
                                    <div class="absolute lg:h-full lg:w-full  bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h3 class=" py-2 px-5 font-bold text-[#05BFDB]">{t("index.image.register")}</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="mx-auto w-fit sm:mb-[2rem] max-[639px]:mb-[2rem]">
                            <div class="w-72 h-fit group">
                                <div class="relative overflow-hidden">
                                    <img class=" w-full object-cover border" src={mockups('./mockup3.png')} alt="" />
                                    <div class="absolute lg:h-full lg:w-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h3 class=" py-2 px-5 font-bold text-center text-[#05BFDB]">{t("index.image.difficulty")}</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="mx-auto w-fit sm:mb-[2rem] max-[639px]:mb-[2rem]">
                            <div class="w-72 h-fit group">
                                <div class="relative overflow-hidden">
                                    <img class=" w-full object-cover border" src={mockups('./mockup4.png')} alt="" />
                                    <div class="absolute lg:h-full lg:w-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h3 class=" py-2 px-5 font-bold text-[#05BFDB]">{t("index.image.levels")}</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="mx-auto w-fit sm:mb-[2rem] max-[639px]:mb-[2rem]">
                            <div class="w-72 h-fit group">
                                <div class="relative overflow-hidden">
                                    <img class=" w-full object-cover border" src={mockups('./mockup5.png')} alt="" />
                                    <div class="absolute lg:h-full lg:w-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h3 class=" py-2 px-5 font-bold text-[#05BFDB]">{t("index.image.levels")}</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="mx-auto w-fit sm:mb-[2rem] max-[639px]:mb-[2rem]">
                            <div class="w-72 h-fit group">
                                <div class="relative overflow-hidden">
                                    <img class=" w-full object-cover border" src={mockups('./mockup6.png')} alt="" />
                                    <div class="absolute lg:h-full lg:w-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h3 class=" py-2 px-5 font-bold text-[#05BFDB]">{t("index.image.levels")}</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="mx-auto w-fit sm:mb-[2rem] max-[639px]:mb-[2rem]">
                            <div class="w-72 h-fit group">
                                <div class="relative overflow-hidden">
                                    <img class=" w-full object-cover border" src={mockups('./mockup7.png')} alt="" />
                                    <div class="absolute lg:h-full lg:w-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h3 class=" py-2 px-5 font-bold text-[#05BFDB]">{t("index.image.levels")}</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="mx-auto w-fit sm:mb-[2rem] max-[639px]:mb-[2rem]">
                            <div class="w-72 h-fit group">
                                <div class="relative overflow-hidden">
                                    <img class=" w-full object-cover border" src={mockups('./mockup8.png')} alt="" />
                                    <div class="absolute lg:h-full lg:w-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h3 class=" py-2 px-5 font-bold text-[#05BFDB]">{t("index.image.levels")}</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <p id='compativilidad'></p>
                <div className='mb-[2rem] h-[60vh] container-plat'>
                    <div className='mb-[2rem] p-4 w-full mt-[5rem]'>
                        <h2 className='text-center text-white font-bold text-[2rem]'>{t("index.platforms.tittle")}</h2>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='grid lg:gap-2 lg:grid-cols-2 disponibilidad container-dispo'>
                            <div className='border border-[#0A4D68] w-[35rem] p-[5rem] bg-[#0A4D68] mx-4 hover:border-[1px] hover:border-solid hover:border-[#05BFDB] servicex'>
                                <img src={plataformas('./android.png')} width={100} className='block m-auto imaginex ' alt='' />
                            </div>
                            <div className='border border-[#0A4D68] w-[35rem] p-[5rem] bg-[#0A4D68] mx-4 hover:border-[1px] hover:border-solid hover:border-[#05BFDB] servicex'>
                                <img src={plataformas('./apple.png')} width={100} className='block m-auto' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            {/* <div className='text-white' >NO LGBTQ+</div> */}
        </>
    )
}
