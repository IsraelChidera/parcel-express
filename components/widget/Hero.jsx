import React from 'react'
import Navbar from './Navbar'
import Container from '@/components/Container';
import Button from '@/components/Button';
import Image from 'next/image';

const Hero = () => {
    return (
        <header className="relative">
            <Navbar />

            <Container className="bg-white px-8 py-16 relative -top-[100px] rounded-[30px]">
                <section className="flex items-center justify-around">
                    <div>
                        <div>
                            <h1 className="text-[#204945] text-[45px] font-medium leading-tight">
                                We deliver your food<br />
                                all over the city within <br />
                                <span className="text-primary">30 minutes</span>
                            </h1>

                            <Button className="bg-primary mt-4 w-full text-white rounded-[0px]">
                                Track Parcel
                            </Button>
                        </div>

                        <div className="mt-10 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-[25px] font-semibold text-center">10x</h3>
                                    <p className="text-[#777E90]">Faster delivery</p>
                                </div>

                                <div>
                                    <h3 className="text-[25px] font-semibold text-center">20+</h3>
                                    <p className="text-[#777E90]">States in Nigeria</p>
                                </div>

                                <div>
                                    <h3 className="text-[25px] font-semibold text-center">99.9%</h3>
                                    <p className="text-[#777E90]">Order accuracy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image src="/hero-img.png" alt="hero image" width={316} height={357} />
                    </div>
                </section>
            </Container>
        </header>
    )
}

export default Hero