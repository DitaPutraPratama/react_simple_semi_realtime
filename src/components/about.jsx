import React from 'react'
import { Leaf } from "@phosphor-icons/react";


function About() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="konten" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1521111756787-d2f69136cedf?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-green-500">
                                <Leaf size={60} />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-black text-xl">Air Guard</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-2 "></div>
                                <p className=" text-black text-lg">Berdedikasi untuk memastikan udara bersih bagi semua orang, Air Guard membawa keahlian dan semangat pada misi kami untuk memantau kualitas udara.</p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-400 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-xl mb-4 text-black">Sistem pemantauan kualitas udara real-time kami fokus pada pelacakan partikel halus (PM2.5) dan tingkat karbon monoksida (CO). Polutan ini, yang seringkali dihasilkan dari proses pembakaran, menimbulkan risiko kesehatan yang signifikan. Dengan menyediakan data terbaru, kami memberdayakan komunitas untuk membuat keputusan yang tepat dan mendorong tindakan menuju udara yang lebih bersih. Misi kami adalah meningkatkan kesadaran dan mendorong aksi menuju lingkungan yang lebih sehat dan aman bagi semua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
