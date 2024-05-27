import "./Page.css";
import { Link } from 'react-router-dom';

import bannerImage from "@/assets/background.png"
import logo from "@/assets/logo1.png"

import Sidebot from "@/components/SideBot/Sidebot";

const Home = () => {
    return (
        <>
            <div className="homepage">

            {/* SideBot */}
            <Sidebot />

            {/* <!-- Navbar --> */}
            <section className="w-full px-8 text-gray-700 bg-white">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="relative flex flex-col md:flex-row">
                        <div className="max-h-12 max-w-12">
                            <img src={logo}></img>
                        </div>
                        <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                            <Link to="/browseall" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Browse All</Link>
                        </nav>
                    </div>

                    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                        <Link to="/login" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                            Sign in
                        </Link>
                        <Link to="/signup" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                            Sign up
                        </Link>
                    </div>
                </div>
            </section>

            {/* <!-- Section 2 --> */}
            <section className="px-2 py-10 md:px-0 bg-white bg-opacity-30">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                    <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                        <span className="block xl:inline">Custom</span>
                        <span className="block text-indigo-600 xl:inline">Support</span>
                        <div>
                            <p className="mx-auto text-sm text-black mt-3 font-semibold sm:max-w-md lg:text-xl md:max-w-3xl">NLP Driven Generative AI For Personalized Data</p>
                        </div>
                    </h1>

                    <p className="mx-auto text-base text-black sm:max-w-md  md:max-w-3xl">Now Create Custom, Customer Service Support Bot Using Our Solution for your bussiness</p>
                    
                    <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                        <Link to="/login" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-black rounded-md sm:mb-0 hover:bg-gray-700 sm:w-auto">
                            Start Creating Now
                        </Link>

                        <Link to="/NustBot" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                            Try Demo Now
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full h-[450px] overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={bannerImage}></img>
                    </div>
                </div>
                </div>
            </div>
            </section>


            <section className="px-2 py-10 md:px-0 bg-white bg-opacity-20">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2">
                    <div className="w-full h-[450px] overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={bannerImage}></img>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:px-10">
                    <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                        <span className="block xl:inline">How It </span>
                        <span className="block text-indigo-600 xl:inline">Works</span>
                    </h1>
                    <p className="mx-auto text-base text-black sm:max-w-md lg:text-xl md:max-w-3xl">Create a chatbot<br></br> Upload Your data <br></br>Chatbot Ready.</p>
                    </div>
                </div>
                
                </div>
            </div>
            </section>

    </div>
        </>
    );
    
};

export default Home;