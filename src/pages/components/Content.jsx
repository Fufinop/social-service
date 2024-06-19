import Link from "next/link";

export default function Content() {
    return (
        <section className="text-gray-400 body-font bg-gray-900">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Herramientas
                        Comerciales</h1>
                    <p>Selecciona la herramienta deseada</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/3 md:w-1/2 p-4 flex flex-col">
                        <Link href="/CostCalculator">
                            <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg flex-grow"
                                 style={{minHeight: '200px'}}>
                                <div
                                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-white font-medium title-font mb-2">Cálculo del costo por
                                    hora</h2>
                                <p className="leading-relaxed text-base flex-grow">Cuanto vale tu tiempo</p>
                            </div>
                        </Link>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 p-4 flex flex-col">
                        <Link href="/BreakEvenPoint">
                            <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg flex-grow"
                                 style={{minHeight: '200px'}}>
                                <div
                                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-white font-medium title-font mb-2">Cálculo del punto de
                                    equilibrio</h2>
                                <p className="leading-relaxed text-base flex-grow">Cuánto tengo que producir y vender para
                                    solventar mi estilo de vida.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 p-4 flex flex-col">
                        <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg flex-grow"
                             style={{minHeight: '200px'}}>
                            <div
                                className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h2 className="text-lg text-white font-medium title-font mb-2">Neptune</h2>
                            <p className="leading-relaxed text-base flex-grow">Fingerstache flexitarian street art 8-bit waist co,
                                subway tile poke farm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
