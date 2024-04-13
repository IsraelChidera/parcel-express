"use client"

import React, {useState, useEffect} from 'react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const page = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/")
    }

    
    const options = {
        headers: {
            accept: 'application/json',
            // Authorization: `Bearer ${apiKey}`
        }
    };
    const getCities = async () => {
        try {
            await axios.get(`https://sandbox.myt40.com/api/v2/retailer/cities`, options)
            .then(response => console.log(response))
            .catch(err => console.error(err));
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getCities();
    }, [])
    return (
        <main className=' h-screen'>
            <nav className='py-6 border-b border-[#ECEEEB]'>
                <Container>
                    <div className="flex items-center space-x-4">
                        <Image onClick={handleClick} className='cursor-pointer' src="/back-arrow.png" alt="back arrow" width={46} height={64} />

                        <div className='flex items-center space-x-2'>
                            <p>Parcel verification</p>

                            <p className='text-xs text-primary p-1 bg-[#5552d9] bg-opacity-10 rounded-md'>in progress</p>
                        </div>
                    </div>
                </Container>
            </nav>

            <Container className='mt-20'>
                <div>
                    <form className='w-[620px] mx-auto space-y-6'>
                        <div>
                            <h2 className="font-semibold text-xl text-primary">Intercity Parcel Express</h2>
                            <p className='text-sm pt-1'>
                                ParcelExpress provides a seamless experience for
                                sending parcels of various sizes and types to
                                destinations across different cities.
                            </p>
                        </div>
                        <div>
                            <label htmlFor="cities" className="block text-sm font-medium leading-6 text-gray-900">
                                Cities
                            </label>
                            <div>
                                <select
                                    id="cities"
                                    name="cities"
                                    autoComplete="cities-name"
                                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className='block font-medium'>
                                Business name
                            </label>
                            <input type="text"
                                name="businessname"
                                placeholder=''

                                className='border text-sm border-[#e0e0e0] w-full rounded-[10px] text-[#111827] py-[10px] pl-[14px] pr-[10px]'
                            />

                        </div>

                        <div>
                            <label className='block font-medium'>
                                Phone number
                            </label>
                            <input type="text"
                                name="phone"
                                placeholder=''

                                className='border text-sm border-[#e0e0e0] w-full rounded-[10px] text-[#111827] py-[10px] pl-[14px] pr-[10px]'
                            />

                        </div>

                        <div>
                            <label className='block font-medium'>
                                Country
                            </label>
                            <input type="text"
                                name="country"
                                placeholder=''
                                className='border text-sm border-[#e0e0e0] w-full rounded-[10px] text-[#111827] py-[10px] pl-[14px] pr-[10px]'
                            />

                        </div>

                        <Button
                            type="submit"

                        // className=" w-full bg-primary text-white rounded-[10px]"                    
                        >
                            Track
                        </Button>


                    </form>
                </div>
            </Container>

        </main>
    )
}

export default page