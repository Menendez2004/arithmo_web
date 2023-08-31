import React from 'react'
import hola from '../../assets/img/hero.png'
import { Nav } from '../../assets/components/navbar'
import { Footer } from '../../assets/components/footer';
// import { BiAnchor } from "react-icons/bi";

// Translation as well -.-
import { useTranslation } from "react-i18next";

//img
const imagenes = require.context('../../assets/img/')
const help = require.context('../../assets/img/help/')

export const Help = () => {

    const { t } = useTranslation();

    const image = {
        backgroundImage: `url(${hola})`,
        backgroundPosition: '50%',
        height: '35rem'
    }



    return (
        <>
            <div>
                <Nav />
                <div className="relative overflow-hidden bg-cover bg-no-repeat " style={image} >
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                        <div className="flex h-full items-center justify-center">
                            <div className="px-6 text-center text-white md:px-12">
                                <h1 className="mt-2  text-[4rem] font-bold tracking-tight ">{t('Help.tittle')} </h1>
                                <h3>{t('Help.sub-tittle')}</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-[#0A4D68] '>

                <div class='p-[8rem] cubo'>

                    <div className=''>
                        {/* Operaciones basicas */}
                        <div className='mb-[5rem] acc' >
                            <h1 className='text-[#05BFDB] text-[2rem] font-bold'>{t('Help.Basic.tittle')}</h1>
                            <hr className='border-2 border-[#05BFDB] lg:w-[95%] linea' />
                            <div className='mb-[2rem]'>
                                <div className='flex w-full mt-[2rem] hola'>
                                    <img src={imagenes('./Imagen6.png')} className=' lg:w-[40rem] md:w-[auto]' />
                                    <div className='lg:ml-[5rem] mt-[1rem]'>
                                        <h1 className='text-[#05BFDB] text-[1.5rem] font-bold'>{t('Help.Basic.sub-tittle')}</h1>
                                        <p className='text-justify text-[#FFFFFF] lg:w-[30rem]'>{t('Help.Basic.text')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input1' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input1' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Basic.t1')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>

                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem]   aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-center w-full mb-[1rem]'>{t('Help.Basic.p1')}</p>
                                        <img src={help('./suma.png')} className='w-[10rem] h-full m-auto block ' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input2' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input2' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Basic.t2')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>

                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-center w-full mb-[1rem]'>{t('Help.Basic.p2')}</p>
                                        <img src={help('./resta.png')} className='w-[10rem] h-full m-auto block ' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem] '>
                                    <input type='checkbox' id='input4' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input4' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]'>{t('Help.Basic.t3')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-center w-full mb-[1rem]'>{t('Help.Basic.p3')}</p>
                                        <img src={help('./mult.png')} className='w-[10rem] h-full m-auto block ' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex '>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input3' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input3' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Basic.t4')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <p className='p-[1.25rem] text-sm'> <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-center w-full mb-[1rem]'>{t('Help.Basic.p4')}</p>
                                            <img src={help('./division.png')} className='w-[10rem] h-full m-auto block ' /></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fracciones */}
                        <div className='mb-[5rem] a '>
                            <h1 className='text-[#05BFDB] text-[2rem] font-bold'>{t('Help.Fracc.tittle')}</h1>
                            <hr className='border-2 border-[#05BFDB] lg:w-[95%] linea' />
                            <div className='mb-[2rem] '>
                                <div className='lg:flex w-full mt-[2rem] hola'>
                                    <img src={imagenes('./Imagen7.png')} className=' lg:w-[40rem] md:w-[auto] rounded-[2rem]' />
                                    <div className='lg:ml-[5rem] mt-[1rem]'>
                                        <h1 className='text-[#05BFDB] text-[1.5rem] font-bold'>{t('Help.Fracc.sub-tittle')}</h1>
                                        <p className='text-justify text-[#FFFFFF] lg:w-[30rem]'>{t('Help.Fracc.text')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input5' className='absolute peer opacity-0 a ' />
                                    <label htmlFor='input5' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Fracc.t1')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-center w-full mb-[1rem]'>{t('Help.Fracc.p1')}</p>
                                        <img src={help('./sum1.png')} className='w-[20rem] h-full m-auto block ' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input6' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input6' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Fracc.t2')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-center w-full mb-[1rem]'>{t('Help.Fracc.p2')}</p>
                                        <img src={help('./rest1.png')} className='w-[20rem] h-full m-auto block ' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex  mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem] '>
                                    <input type='checkbox' id='input8' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input8' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]'>{t('Help.Fracc.t3')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-center w-full mb-[1rem]'>{t('Help.Fracc.p3')}</p>
                                        <img src={help('./div1.png')} className='w-[20rem] h-full m-auto block ' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input7' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input7' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Fracc.t4')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-center w-full mb-[1rem]'>{t('Help.Fracc.p4')}</p>
                                        <img src={help('./mul1.png')} className='w-[20rem] h-full m-auto block ' />
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Polinomios */}
                        <div className='mb-[5rem]'>
                            <h1 className='text-[#05BFDB] text-[2rem] font-bold'>{t('Help.Polim.tittle')}</h1>
                            <hr className='border-2 border-[#05BFDB] lg:w-[95%] linea' />
                            <div className='mb-[2rem]'>
                                <div className='lg:flex w-full mt-[2rem] hola'>
                                    <img src={imagenes('./Imagen8.png')} className=' lg:w-[40rem] md:w-[auto] rounded-[2rem]' />
                                    <div className='lg:ml-[5rem] mt-[1rem]'>
                                        <h1 className='text-[#05BFDB] text-[1.5rem] font-bold'>{t('Help.Polim.sub-tittle')}</h1>
                                        <p className='text-justify text-[#FFFFFF] lg:w-[30rem]'>{t('Help.Polim.text')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input9' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input9' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF] a' >{t('Help.Polim.t1')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-center w-full mb-[1rem]'>{t('Help.Polim.p1')}</p>
                                        <img src={help('./sum2.png')} className='w-[10rem] h-full m-auto block ' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input10' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input10' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Polim.t2')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] aling-center justify-center peer-checked:mb-[2rem] acc' >
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-center w-full mb-[1rem]'>{t('Help.Polim.p2')}</p>
                                        <img src={help('./res2.png')} className='w-[15rem] h-full m-auto block ' />
                                    </div>
                                </div>
                            </div>

                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input11' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input11' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Polim.t3')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[15rem] aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-center w-full mb-[1rem]'>{t('Help.Polim.p3')}</p>

                                        <img src={help('./div2.png')} className='w-[15rem] h-full m-auto block ' />

                                    </div>
                                </div>
                            </div>


                            <div className='flex '>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input12' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input12' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Polim.t4')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[15rem] aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-center w-full mb-[1rem]'>{t('Help.Polim.p4')}</p>
                                        <img src={help('./mul2.png')} className='w-[15rem] h-full m-auto block ' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Casos de Factoreo */}
                        <div className='mb-[5rem]'>
                            <h1 className='text-[#05BFDB] text-[2rem] font-bold'>{t('Help.Fact.tittle')}</h1>
                            <hr className='border-2 border-[#05BFDB] lg:w-[95%] linea' />
                            <div className='mb-[2rem]'>
                                <div className='lg:flex w-full mt-[2rem] hola'>
                                    <img src={imagenes('./Imagen9.png')} className=' lg:w-[40rem] md:w-[auto] rounded-[2rem]' />
                                    <div className='lg:ml-[5rem] mt-[1rem]'>
                                        <h1 className='text-[#05BFDB] text-[1.5rem] font-bold'>{t('Help.Fact.sub-tittle')}</h1>
                                        <p className='text-justify text-[#FFFFFF] lg:w-[30rem]'>{t('Help.Fact.text')} </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]  '>
                                    <input type='checkbox' id='input13' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input13' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Fact.t1')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200    '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[12rem] flex aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <img src={help('./caso1.png')} className='w-[12rem] h-full mr-[5rem]' />
                                        <p className=' text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-justify'>{t('Help.Fact.p1')} </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input14' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input14' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Fact.t2')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] flex aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <img src={help('./caso2.png')} className='w-[12rem] h-full mr-[5rem]' />
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-justify'>{t('Help.Fact.p2')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input15' className='absolute peer opacity-0 ' />
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <label htmlFor='input15' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center  transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Fact.t3')}</label>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] flex aling-center justify-center peer-checked:mb-[1rem] acc ' >
                                        <img src={help('./caso3.png')} className='w-[12rem] h-full mr-[5rem]' />
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-justify'>{t('Help.Fact.p3')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem] '>
                                    <input type='checkbox' id='input16' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input16' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]'>{t('Help.Fact.t4')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] flex aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <img src={help('./caso4.png')} className='w-[12rem] h-full mr-[5rem] mt-[1rem]' />
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-justify'>{t('Help.Fact.p4')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input17' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input17' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Fact.t5')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] flex aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <img src={help('./caso5.png')} className='w-[12rem] h-full mr-[5rem] mt-[1rem]' />
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-justify'>{t('Help.Fact.p5')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input18' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input18' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Fact.t6')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] flex aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <img src={help('./caso6.png')} className='w-[12rem] h-full mr-[5rem] mt-[1rem]' />
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-justify'>{t('Help.Fact.p6')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input19' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input19' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Fact.t7')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] flex aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <img src={help('./caso7.png')} className='w-[12rem] h-full mr-[5rem] ' />
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-justify'>{t('Help.Fact.p7')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem] '>
                                    <input type='checkbox' id='input20' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input20' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]'>{t('Help.Fact.t8')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] flex aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <img src={help('./caso8.png')} className='w-[20rem] h-full mr-[5rem] ' />
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-justify'>{t('Help.Fact.p8')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem]'>
                                    <input type='checkbox' id='input21' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input21' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]' >{t('Help.Fact.t9')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] flex aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <img src={help('./caso9.png')} className='w-[20rem] h-full mr-[5rem] ' />
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-justify'>{t('Help.Fact.p9')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className='relative w-[95%] bg-[#088395] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255, 255,255.0.8)] rounded-xl m-[0.938rrem] '>
                                    <input type='checkbox' id='input22' className='absolute peer opacity-0 ' />
                                    <label htmlFor='input22' className='font-bold tracking-[1px] mx-[1.25rem] h-[3.125rem] flex items-center transition duration-300 ease-in-out cursor-pointer text-[#FFFFFF]'>{t('Help.Fact.t10')}</label>
                                    <div className='absolute top-[1rem] right-[1.875rem] rotate-0 peer-checked:rotate-180 duration-200  '>
                                        <ion-icon name="chevron-down-outline" class="text-[#00FFCA] "></ion-icon>
                                    </div>
                                    <div className='max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-[10rem] flex aling-center justify-center peer-checked:mb-[1rem] acc' >
                                        <img src={help('./caso10.png')} className='w-[25rem] h-full mr-[5rem] ' />
                                        <p className='text-[1.1rem] text-[#00FFCA] font-bold w-[30rem] text-justify'>{t('Help.Fact.p10')}</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>


                </div >

            </div>

            <Footer />

        </>
    )
}