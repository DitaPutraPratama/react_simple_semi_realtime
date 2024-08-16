import React from 'react'
import axios from 'axios'
import useSWR from 'swr'
import Loading from './loading'
import { Campfire, Atom } from '@phosphor-icons/react'

const SensorList = () => {
    const fetcher = async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/ispu`
        )
        return response.data
    }
    const { data } = useSWR('data', fetcher, { refreshInterval: 500 })
    const getQualityData = (value) => {
        if (value >= 0 && value <= 50) {
            return {
                color: 'bg-green-500',
                category: 'Baik',
                colorTXT: 'text-gray-900',
            }
        } else if (value >= 51 && value <= 100) {
            return {
                color: 'bg-blue-500',
                category: 'Sedang',
                colorTXT: 'text-gray-900',
            }
        } else if (value >= 101 && value <= 200) {
            return {
                color: 'bg-yellow-500',
                category: 'Tidak Sehat',
                colorTXT: 'text-gray-900',
            }
        } else if (value >= 201 && value <= 300) {
            return {
                color: 'bg-red-500',
                category: 'Sangat Tidak Sehat',
                colorTXT: 'text-gray-900',
            }
        } else {
            return {
                color: 'bg-slate-600',
                category: 'Berbahaya',
                colorTXT: 'text-gray-50',
            }
        }
    }
    if (!data) return <Loading />
    const qualityData = getQualityData(data.finalISPU)
    console.log(data)

    return (
        <section className="text-black body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex justify-center mb-10">
                    <div
                        className={`w-full md:w-1/2 h-14 border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden flex items-center justify-center ${qualityData.color}`}
                    >
                        <h2
                            className={`text-xl font-medium  ${qualityData.colorTXT}`}
                        >
                            ISPU: {data.finalISPU} - {qualityData.category}
                        </h2>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2">
                        <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg bg-gray-300 overflow-hidden">
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    CO (Karbon Monoksida)
                                </h1>
                                <p className="leading-relaxed text-center text-7xl font-bold mb-3">
                                    {data.co} µg/m<sup>3</sup>
                                </p>
                                <div className="flex items-center flex-wrap">
                                    <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                        <Atom size={40} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2">
                        <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg bg-gray-300 overflow-hidden">
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    PM 2.5
                                </h1>
                                <p className="leading-relaxed text-center text-7xl font-bold mb-3">
                                    {data.pm25} µg/m<sup>3</sup>
                                </p>
                                <div className="flex items-center flex-wrap">
                                    <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                        <Campfire size={40} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SensorList
