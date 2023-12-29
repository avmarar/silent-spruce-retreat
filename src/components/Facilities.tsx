import React from 'react';

import {
    FaKitchenSet,
    FaSquareParking,
    FaVanShuttle,
    FaWifi,
} from 'react-icons/fa6';
import { GrLounge } from 'react-icons/gr';
import { MdLocalLaundryService, MdOutdoorGrill } from 'react-icons/md';

import { poppins } from '@/app/fonts';

export const Facilities = () => {
    return (
        <div className="h-full bg-white-50 flex flex-col items-center p-16 lg:px-[119px] ">
            <div className="flex justify-center">
                <span
                    className={`text-black text-[40px] font-medium ${poppins.className}`}
                >
                    Our Facilities
                </span>
            </div>
            <div className="flex justify-center pt-3">
                <span
                    className={`text-black text-[15px] font-medium ${poppins.className}`}
                >
                    We offer modern hotel facilities for your comfort.
                </span>
            </div>
            <div className="w-auto h-auto flex justify-evenly lg:flex-row md:max-lg:flex-col pt-12 items-center lg:flex-wrap">
                <div className="w-[250px] h-[250px] ">
                    <div className="Rectangle8 w-[250px] h-[250px] bg-neutral-50 rounded-[5px] border border-black flex flex-col items-center justify-center">
                        <FaWifi
                            className="w-10 h-10 text-primary"
                            aria-hidden="true"
                        />
                        <span
                            className={`text-primary text-xl font-medium ${poppins.className} pt-5`}
                        >
                            Wifi
                        </span>
                    </div>
                </div>
                <div className="w-[250px] h-[250px] lg:ml-10 sm:max-lg:mt-10 ">
                    <div className="Rectangle8 w-[250px] h-[250px] bg-neutral-50 rounded-[5px] border border-black flex flex-col items-center justify-center ">
                        <FaSquareParking
                            className="w-10 h-10 text-primary"
                            aria-hidden="true"
                        />
                        <span
                            className={`text-primary text-xl font-medium ${poppins.className} pt-5`}
                        >
                            Parking space
                        </span>
                    </div>
                </div>
                <div className="w-[250px] h-[250px] xl:ml-10 sm:max-xl:mt-10 ">
                    <div className="Rectangle8 w-[250px] h-[250px] bg-neutral-50 rounded-[5px] border border-black flex flex-col items-center justify-center ">
                        <FaKitchenSet
                            className="w-10 h-10 text-primary"
                            aria-hidden="true"
                        />
                        <span
                            className={`text-primary text-xl font-medium ${poppins.className} pt-5`}
                        >
                            Shared kitchen
                        </span>
                    </div>
                </div>
                <div className="w-[250px] h-[250px] lg:ml-10 sm:max-xl:mt-10 ">
                    <div className="Rectangle8 w-[250px] h-[250px] bg-neutral-50 rounded-[5px] border border-black flex flex-col items-center justify-center ">
                        <GrLounge
                            className="w-10 h-10 text-primary"
                            aria-hidden="true"
                        />
                        <span
                            className={`text-primary text-xl font-medium ${poppins.className} pt-5`}
                        >
                            Shared lounge
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-auto h-auto flex justify-evenly lg:flex-row sm:max-lg:flex-col pt-12 items-center lg:flex:wrap">
                <div className="w-[250px] h-[250px] ">
                    <div className="Rectangle8 w-[250px] h-[250px] bg-neutral-50 rounded-[5px] border border-black flex flex-col items-center justify-center ">
                        <MdOutdoorGrill
                            className="w-10 h-10 text-primary"
                            aria-hidden="true"
                        />
                        <span
                            className={`text-primary text-xl font-medium ${poppins.className} pt-5`}
                        >
                            BBQ facility
                        </span>
                    </div>
                </div>
                <div className="w-[250px] h-[250px] lg:ml-10 sm:max-lg:mt-10 ">
                    <div className="Rectangle8 w-[250px] h-[250px] bg-neutral-50 rounded-[5px] border border-black flex flex-col items-center justify-center ">
                        <FaVanShuttle
                            className="w-10 h-10 text-primary"
                            aria-hidden="true"
                        />
                        <span
                            className={`text-primary text-xl font-medium ${poppins.className} pt-5`}
                        >
                            Local shuttle
                        </span>
                    </div>
                </div>
                <div className="w-[250px] h-[250px] lg:ml-10 sm:max-lg:mt-10 ">
                    <div className="Rectangle8 w-[250px] h-[250px] bg-neutral-50 rounded-[5px] border border-black flex flex-col items-center justify-center ">
                        <MdLocalLaundryService
                            className="w-10 h-10 text-primary"
                            aria-hidden="true"
                        />
                        <span
                            className={`text-primary text-xl font-medium ${poppins.className} pt-5`}
                        >
                            Laundry service
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
