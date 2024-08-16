import React from "react";
import Chart from "react-apexcharts";
import axios from 'axios';
import useSWR from 'swr';
import Loading from "./loading";

const ChartSensor = () => {

    const fetcher = async (url) => {
        const response = await axios.get(url);
        return response.data;
    }

    const { data } = useSWR(`${process.env.REACT_APP_API_URL}/data`, fetcher, { refreshInterval: 500 }); // eslint-disable-next-line

    if (!data) return <Loading />;

    const coData = data.map(entry => parseFloat(entry.co));
    const pm25Data = data.map(entry => parseFloat(entry.pm25));
    const categories = data.map(entry => entry.time);
    const day = data.length > 0 ? data[0].date : "No Date Available";

    const options = {
        series: [
            {
                name: 'CO',
                data: coData
            },
            {
                name: 'PM 2.5',
                data: pm25Data
            }
        ],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        title: {
            text: day,
            align: 'center',
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#263238'
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            }
        },
        xaxis: {
            categories: categories
        },
        yaxis: [
            {
                title: {
                    text: "CO Level"
                },
            },
            {
                opposite: true,
                title: {
                    text: "PM 2.5 Level"
                }
            }
        ],
    };

    return (
        <div className="flex flex-col container mx-auto">
            <div className="p-2 md:w-full">
                <Chart
                    className="bg-gray-300 rounded-lg p-2"
                    options={options}
                    series={options.series}
                    type="line"
                    height={350}
                />
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="px-2 pt-2 md:w-1/2">
                    <table className="rounded-lg w-full text-sm text-left bg-gray-300 overflow-hidden">
                        <thead className="text-xs text-white uppercase bg-gray-500">
                            <tr>
                                <th className="py-3 px-9 text-center">Waktu</th>
                                <th className="py-3 px-10">CO</th>
                                <th className="py-3 px-10">PM 2.5</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((sensor) => (
                                <tr className="bg-gray-300 border-b" key={sensor.id}>
                                    <td className="py-3 px-9 font-bold text-center">{sensor.date} {sensor.time}</td>
                                    <td className="py-3 px-10 font-bold">{sensor.co} µg/m³</td>
                                    <td className="py-3 px-10 font-bold">{sensor.pm25} µg/m³</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-2 md:w-1/2">
                    <table className="rounded-lg w-full text-sm text-left bg-gray-300 overflow-hidden">
                        <thead className="text-xs text-white uppercase bg-gray-500">
                            <tr>
                                <th className="py-3 px-4 text-center">Kategori ISPU</th>
                                <th className="py-3 px-4 text-center">PM2.5 (ug/m³)</th>
                                <th className="py-3 px-4 text-center">CO (<u></u>ug/m³)</th>
                                <th className="py-3 px-4 text-center">ISPU</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-300 border-b">
                                <td className="py-3 px-4 text-center">Baik (0-50)</td>
                                <td className="py-3 px-4 text-center">0 - 15.5</td>
                                <td className="py-3 px-4 text-center">0 - 4000</td>
                                <td className="py-3 px-4 text-center">0 - 50</td>
                            </tr>
                            <tr className="bg-gray-300 border-b">
                                <td className="py-3 px-4 text-center">Sedang (51-100)</td>
                                <td className="py-3 px-4 text-center">15.6 - 55.4</td>
                                <td className="py-3 px-4 text-center">4001 - 8000</td>
                                <td className="py-3 px-4 text-center">51 - 100</td>
                            </tr>
                            <tr className="bg-gray-300 border-b">
                                <td className="py-3 px-4 text-center">Tidak Sehat (101-200)</td>
                                <td className="py-3 px-4 text-center">55.5 - 150.4</td>
                                <td className="py-3 px-4 text-center">8001 - 15000</td>
                                <td className="py-3 px-4 text-center">101 - 200</td>
                            </tr>
                            <tr className="bg-gray-300 border-b">
                                <td className="py-3 px-4 text-center">Sangat Tidak Sehat (201-300)</td>
                                <td className="py-3 px-4 text-center">150.5 - 250.4</td>
                                <td className="py-3 px-4 text-center">15001 - 30000</td>
                                <td className="py-3 px-4 text-center">201 - 300</td>
                            </tr>
                            <tr className="bg-gray-300 border-b">
                                <td className="py-3 px-4 text-center">Berbahaya ({`>`}300)</td>
                                <td className="py-3 px-4 text-center">{`>`}250.4</td>
                                <td className="py-3 px-4 text-center">{`>`}30000</td>
                                <td className="py-3 px-4 text-center">{`>`}300</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ChartSensor;
