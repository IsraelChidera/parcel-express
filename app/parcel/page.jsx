"use client"

import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoReloadOutline } from "react-icons/io5";

const page = () => {
    const [cities, setCities] = useState([]);
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState({
        cities: ""
    });
    const router = useRouter();
    const handleClick = () => {
        router.push("/")
    }

    const handleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    const apiKey = ``;
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };

    const getCities = async () => {
        try {
            setLoading(true);

            await axios.get(`https://sandbox.myt40.com/api/v2/retailer/cities`, options)
                .then(response => {
                    setCities(response);
                    console.log(response);
                    setLoading(false);               
                })
                .catch(err => {
                    console.log("error: ", err.message)
                    toast.error("error loading cities");
                    setLoading(false);
                    throw new Error(err.message);
                })
        } catch (error) {
            toast.error("error loading cities");
            console.log("error", error);
        }
    }

    const getLocations = async () => {
        try {
            setLoading(true);

            await axios.get(`https://sandbox.myt40.com/api/v2/retailer/locations?city_id=${formValues.cities}`, options)
                .then(response => {
                    setCities(response);
                    console.log(response);
                    setLoading(false);               
                })
                .catch(err => {
                    console.log("error: ", err.message)
                    toast.error("error loading cities");
                    setLoading(false);
                    throw new Error(err.message);
                })
        } catch (error) {
            toast.error("error loading cities");
            console.log("error", error);
        }
    }

    console.log("step: ", cities);

    const handleCitySubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
        setStep(prev => prev + 1)
    }

    const handlePrevBtn = () => {
        setStep(prev => prev + 1)
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

            <Container className='mt-20 pb-20'>
                <form className='w-[620px] mx-auto'>
                    <div>
                        <h2 className="font-semibold text-xl text-primary">Intercity Parcel Express</h2>
                        <p className='text-sm pt-1'>
                            ParcelExpress provides a seamless experience for
                            sending parcels of various sizes and types to
                            destinations across different cities.
                        </p>
                    </div>

                    {
                        step === 1 && !loading ?
                            <div className='space-y-6'>
                                <div>
                                    <label htmlFor="cities" className="block text-sm font-medium leading-6 text-gray-900">
                                        Cities
                                    </label>
                                    <div>
                                        <select
                                            id="cities"
                                            name="cities"
                                            onChange={handleChange}
                                            autoComplete="cities-name"
                                            className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                        >
                                            <option value="">
                                                -- Please choose an option --
                                            </option>
                                            {
                                                cities?.data?.data?.map(city => (
                                                    <option key={city.id} value={city.id}>
                                                        {city.name}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    onClick={handleCitySubmit}
                                    className="bg-primary py-3 w-full text-white"
                                >
                                    Choose city
                                </Button>
                            </div>
                            : loading && (
                                <div className='flex justify-center items-center'>
                                    <IoReloadOutline className='mt-10 text-2xl animate-spin' />
                                </div>
                            )
                    }

                    {
                        step === 2 &&
                        <div className='space-y-6'>
                            <div>
                                <label htmlFor="locations" className="block text-sm font-medium leading-6 text-gray-900">
                                    Choose locations
                                </label>
                                <div>
                                    <select
                                        id="locations"
                                        name="locations"
                                        onChange={handleChange}
                                        autoComplete="locations-name"
                                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    >
                                        <option value="">
                                            -- Please choose an option --
                                        </option>
                                        {/* {
                                            cities?.data?.data?.map(city => (
                                                <option key={city.id} value={city.id}>
                                                    {city.name}
                                                </option>
                                            ))
                                        } */}
                                    </select>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-x-2'>
                                <Button
                                    type="submit"
                                    className="bg-primary py-3 w-full text-white"
                                >
                                    Track
                                </Button>

                                <Button
                                    type="submit"
                                    className="bg-primary py-3 w-full text-white"
                                >
                                    Back
                                </Button>
                            </div>
                        </div>
                    }
                </form>
            </Container>

        </main>
    )
}

export default page