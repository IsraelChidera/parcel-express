import React from 'react'
import Navbar from './Navbar'
import Container from '../Container';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <header className="relative">
            <Navbar />

            <Container className="bg-white px-8 py-16 relative -top-[100px] rounded-[30px]">
                <section className="md:flex items-center md:space-x-4 justify-between md:justify-around">
                    <div>
                        <div>
                            <h1 className="text-[#204945] text-[35px] md:text-[45px] font-medium leading-tight">
                                We deliver your food <br className='md:block hidden' />
                                all over the city within <br className='md:block hidden' />
                                <span className="text-primary font-semibold">30 minutes</span>
                            </h1>

                            <Link href="/parcel" className="block text-center bg-primary mt-4 w-full text-white rounded-[0px] border border-[#fff] py-[8px] px-[18px] md:px-[24px] text-base font-medium">
                                Track Parcel
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-col justify-between">
                            <div className="flex flex-wrap items-center justify-between">
                                <div>
                                    <h3 className="text-base md:text-[25px] font-semibold text-center">10x</h3>
                                    <p className="text-[#777E90] text-xs md:text-base">Faster delivery</p>
                                </div>

                                <div>
                                    <h3 className="text-base md:text-[25px] font-semibold text-center">20+</h3>
                                    <p className="text-[#777E90] text-xs md:text-base">States in Nigeria</p>
                                </div>

                                <div>
                                    <h3 className="text-base md:text-[25px] font-semibold text-center">99.9%</h3>
                                    <p className="text-[#777E90] text-xs md:text-base">Order accuracy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-10 md:pt-0 flex items-center justify-center'>
                        <Image src="/hero-img.png" className='md:block hidden' alt="hero image" width={316} height={357} />
                        <Image src="/hero-img.png" className='md:hidden block' alt="hero image" width={216} height={257} />
                    </div>
                </section>
            </Container>
        </header>
    )
}

export default Hero