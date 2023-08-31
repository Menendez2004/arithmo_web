import React from 'react'
import { Nav } from '../../assets/components/navbar';
import { Footer } from '../../assets/components/footer';


//images
const signos = require.context('../../assets/img', true);

export const Download = () => {
    return (
        <>
            <Nav />
            <div className='w-full h-full mt-[5rem] bg-white mb-[5rem]'>
                <div className='flex w-full z-20 '>
                    <div className='left-0'>
                        <img src={signos('./multiplicar.png')} className=' w-[8rem] rotate-[-195deg] ml-[1.5rem]' />
                    </div>
                    <div className='grow'>
                        <img src={signos('./division.png')} className=' w-[8rem] float-right rotate-[-24deg] mr-[1.5rem]' />
                    </div>
                </div>
                <div className='mb-[2rem] w-full z-10 mt-[] '>
                    <h1 className='text-center text-[2.3rem] font-bold mt-[2rem]'>¡Descargar Arithmo es muy fácil!</h1>
                    <p className='text-center'>Escanea el código qr de tu dispositivo correspondiente y disfruta!!!</p>
                </div>
                <div className='flex flex justify-center items-center mt-[3rem]'>
                    <div className='mr-[5rem]'>
                        <div>
                            <div className='bg-[#088395] w-[20rem] h-[20rem] rounded-[2.5rem] '></div>
                        </div>
                        <p className='text-center font-bold'>Android</p>
                    </div>
                    <div>
                        <div>
                            <div className='bg-[#088395] w-[20rem] h-[20rem] rounded-[2.5rem] '></div>
                        </div>
                        <p className='text-center font-bold'>Apple</p>
                    </div>
                </div>
                <div className='flex w-full z-20 '>
                    <div className='left-0'>
                        <img src={signos('./suma.png')} className=' w-[8rem] rotate-[-24deg] ml-[1.5rem]' />
                    </div>
                    <div className='grow'>
                        <img src={signos('./resta.png')} className=' w-[8rem] float-right rotate-[-24deg] mr-[1.5rem]' />
                    </div>
                </div>
            </div>
            <hr />
            <Footer className='mt-[5rem]' />
            {/* 070809 */}
        </>
    )
}

