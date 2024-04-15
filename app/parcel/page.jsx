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
    const [location, setLocation] = useState([]);
    const [parcelType, setParcelType] = useState([]);
    const [parcelSize, setParcelSize] = useState([]);
    const [parcelRoute, setParcelRoute] = useState([]);
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);


    const [formValues, setFormValues] = useState({
        cities: "",
        locations: "",
        parceltype: "",
        parcelsize: ""
    });

    const router = useRouter();
    const handleClick = () => {
        router.push("/")
    }

    const handleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    const apiKey = `pk_$2y$10$rJt1rXtc4aVy6jBRY/ERwe3lLVxOPvoN2JIsIgTCatLXTcptylcKq`;
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
            // toast.error("error loading cities");
            console.log("error", error);
        }
    }

    const getLocations = async () => {
        try {
            // setLoading(true);

            await axios.get(`https://sandbox.myt40.com/api/v2/retailer/locations?city_id=${formValues.cities}`, options)
                .then(response => {
                    setLocation(response);
                    console.log(response);
                    // setLoading(false);
                })
                .catch(err => {
                    console.log("error: ", err.message)
                    toast.error("error loading locations");
                    // setLoading(false);
                    throw new Error(err.message);
                })
        } catch (error) {
            // toast.error("error loading locations");
            console.log("error", error);
        }
    }

    const getParcelType = async () => {
        try {
            // setLoading(true);

            await axios.get(`https://sandbox.myt40.com/api/v1/retailer/parcels/types`, options)
                .then(response => {
                    setParcelType(response);
                    console.log(response);
                    // setLoading(false);
                })
                .catch(err => {
                    console.log("error: ", err.message)
                    toast.error("error loading parcel type");
                    // setLoading(false);
                    throw new Error(err.message);
                })
        } catch (error) {
            // toast.error("error loading parcel type");
            console.log("error", error);
        }
    }

    const getParcelSize = async () => {
        try {
            // setLoading(true);

            await axios.get(`https://sandbox.myt40.com/api/v1/retailer/parcels/sizes`, options)
                .then(response => {
                    setParcelSize(response);
                    console.log(response);
                    // setLoading(false);
                })
                .catch(err => {
                    console.log("error: ", err.message)
                    toast.error("error loading parcel size");
                    // setLoading(false);
                    throw new Error(err.message);
                })
        } catch (error) {
            // toast.error("error loading parcel size");
            console.log("error", error);
        }
    }

    const getParcelRoute = async () => {
        try {
            // setLoading(true);

            await axios.get(`https://sandbox.myt40.com/api/v2/retailer/parcel-routes?from_city_id=${formValues.cities}`, options)
                .then(response => {
                    setParcelRoute(response);
                    console.log(response);
                    // setLoading(false);
                })
                .catch(err => {
                    console.log("error: ", err.message)
                    toast.error("error loading parcel size");
                    // setLoading(false);
                    throw new Error(err.message);
                })
        } catch (error) {
            // toast.error("error loading parcel size");
            console.log("error", error);
        }
    }

    console.log("step: ", cities);
    console.log("location: ", location)
    console.log("parcel type: ", parcelType)
    console.log("parcel size: ", parcelSize)
    console.log("parcel route: ", parcelRoute)
    console.log("form values: ", formValues)

    const handleCitySubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
        setStep(prev => prev + 1)
    }

    const handleParcelRoute = (event) => {
        event.preventDefault();
    }

    const handlePrevBtn = () => {
        setStep(prev => prev - 1)
    }

    useEffect(() => {
        getCities();
        getParcelType();
        getParcelSize();
    }, [])

    useEffect(() => {
        getLocations();
    }, [formValues])

    useEffect(() => {
        getParcelRoute();
    }, [formValues, cities])

    return (
        <main className=' h-screen'>
            <nav className='py-6 border-b border-[#ECEEEB]'>
                <Container>
                    <div className="flex items-center space-x-4">
                        <Image onClick={handleClick} className='cursor-pointer' src="/back-arrow.png" alt="back arrow" width={46} height={64} />

                        <div className='flex items-center space-x-2'>
                            <p className='md:text-base text-sm'>Parcel verification</p>

                            <p className='text-[9px] md:text-xs text-primary p-1 bg-[#5552d9] bg-opacity-10 rounded-md'>in progress</p>
                        </div>
                    </div>
                </Container>
            </nav>

            <Container className='md:mt-20 mt-10 pb-20'>
                <form className='md:w-[620px] mx-auto'>
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
                                    Go to locations
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
                                        {
                                            location?.data?.data?.map(location => (
                                                <option key={location.id} value={location.id}>
                                                    {location.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className='md:grid space-y-4 md:space-y-0 grid-cols-2 gap-x-2'>
                                <Button
                                    onClick={handleCitySubmit}
                                    type="submit"
                                    className="bg-primary md:text-base py-3 md:py-6 w-full text-white"
                                >
                                    Go to parcel type
                                </Button>

                                <Button
                                    onClick={handlePrevBtn}
                                    type="submit"
                                    className="bg-primary md:text-base py-3 md:py-6 w-full text-white"
                                >
                                    Back
                                </Button>
                            </div>
                        </div>
                    }

                    {
                        step === 3 &&
                        <div className='space-y-6'>
                            <div>
                                <label htmlFor="parceltype" className="block text-sm font-medium leading-6 text-gray-900">
                                    Parcel Type
                                </label>
                                <div>
                                    <select
                                        id="parceltype"
                                        name="parceltype"
                                        onChange={handleChange}
                                        autoComplete="parceltype-name"
                                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    >
                                        <option value="">
                                            -- Please choose an option --
                                        </option>
                                        {
                                            parcelType?.data?.data?.map(location => (
                                                <option key={location.id} value={location.id}>
                                                    {location.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className='md:grid space-y-4 md:space-y-0 grid-cols-2 gap-x-2'>
                                <Button
                                    onClick={handleCitySubmit}
                                    type="submit"
                                    className="bg-primary py-3 md:py-6 w-full text-white"
                                >
                                    Go to parcel size
                                </Button>

                                <Button
                                    onClick={handlePrevBtn}
                                    type="submit"
                                    className="bg-primary py-3 md:py-6 w-full text-white"
                                >
                                    Back
                                </Button>
                            </div>
                        </div>
                    }

                    {
                        step === 4 &&
                        <div className='space-y-6'>
                            <div>
                                <label htmlFor="parcelsize" className="block text-sm font-medium leading-6 text-gray-900">
                                    Parcel Size
                                </label>
                                <div>
                                    <select
                                        id="parcelsize"
                                        name="parcelsize"
                                        onChange={handleChange}
                                        autoComplete="parcelsize-name"
                                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    >
                                        <option value="">
                                            -- Please choose an option --
                                        </option>
                                        {
                                            parcelSize?.data?.data?.map(location => (
                                                <option key={location.id} value={location.id}>
                                                    {location.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className='md:grid space-y-4 md:space-y-0 grid-cols-2 gap-x-2'>
                                <Button
                                    onClick={handleCitySubmit}
                                    type="submit"
                                    className="bg-primary py-3 md:py-6 w-full text-white"
                                >
                                    View parcel routes
                                </Button>

                                <Button
                                    onClick={handlePrevBtn}
                                    type="submit"
                                    className="bg-primary py-3 md:py-6 w-full text-white"
                                >
                                    Back
                                </Button>
                            </div>
                        </div>
                    }

                    {
                        step === 5 &&
                        <div className='space-y-6'>
                            <div className='mt-2'>
                                <p>
                                    Available Parcel route include the following
                                </p>

                                <div className='md:grid hidden grid-cols-4 gap-x-4 pb-1 '>
                                    <div>S/N</div>

                                    <div>Origin</div>

                                    <div>Destination</div>

                                    <div>Status </div>
                                </div>

                                {
                                    parcelRoute?.data?.data?.length === 0 ?
                                        <div className='mt-2 text-sm text-gray-500'>
                                            <p>
                                                There are no available parcel route yet!<br />
                                                Please check later
                                            </p>
                                        </div>
                                        :
                                        <div>
                                            <div className='md:block hidden space-y-3'>
                                                {
                                                    parcelRoute?.data?.data?.map((location, index) => (
                                                        <div
                                                            key={location.id}
                                                            value={location.id}
                                                            className=' space-y-4'
                                                        >
                                                            <div className="md:grid grid-cols-4 gap-x-4">
                                                                <div>{index}</div>

                                                                <div>
                                                                    {location.from_city.name}
                                                                </div>

                                                                <div>
                                                                    {location.to_city.name}
                                                                </div>

                                                                <div>
                                                                    <p className={`${location.status === 'active' ? 'bg-green-600 p-1.5 rounded-xl' : 'bg-red-600 p-1.5 rounded-xl'} text-white text-sm inline`}>
                                                                        {location.status}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                            <div className='md:hidden block'>
                                                {
                                                    parcelRoute?.data?.data?.map((location, index) => (
                                                        <div
                                                            key={location.id}
                                                            value={location.id}
                                                            className=' space-y-4 border-b border-b-[#bcb9b9]'
                                                        >
                                                            <div className="mt-4 md:grid grid-cols-4 gap-x-4">
                                                                <div className='font-semibold text-primary'>Available parcel route from {location.from_city.name}</div>

                                                                <div>
                                                                    Origin: {location.from_city.name}
                                                                </div>

                                                                <div>
                                                                    Destination: {location.to_city.name}
                                                                </div>

                                                                <p>
                                                                    <span>Status:</span> {location.status}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                }
                            </div>

                            <div className='mt-4 md:grid space-y-4 md:space-y-0 grid-cols-2 gap-x-2'>

                                <Button
                                    onClick={handlePrevBtn}
                                    type="submit"
                                    className="bg-primary py-3 md:py-3 w-full text-white"
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