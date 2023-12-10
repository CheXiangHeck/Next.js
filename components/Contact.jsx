import React from "react";
import Link from "next/link";

const Contact = () => {
    return(
        <div className="w-[full] md:h-[300px] h-fit border-t-2 border-w border-b-2 flex md:flex-row flex-col mb-12">
            <div className="flex flex-col justify-center items-center md:w-[50%] md:h-[300px] mb-10">
                <h1 className="font-bold text-9xl">Contact</h1>
                <p className="font-base font-bold">Please don't hestitate to contact.</p>
            </div>
            <div className="md:w-[50%] md:h-[300px] flex flex-col md:border-hidden border-t-2 border-white md:justify-center">
                <div className="font-bold font-xl mb-5 mt-5 flex flex-row">
                    <h1 className="mb-5 mr-5">Gmail:</h1>
                    <Link href="mailto:chehi716@gmail.com" className="underline cursor-pointer font-xl">
                        chehi716@gmail.com
                    </Link>
                </div>
                <div className="font-bold font-xl mb-5 flex flex-row">
                    <h1 className="mb-5 mr-5">LinkedIn:</h1>
                    <Link href="https://linkedin.com/in/wei-xiang-apu" className="underline cursor-pointer font-xl">
                        https://linkedin.com/in/wei-xiang-apu
                    </Link>
                </div>
                <div className="font-bold font-xl mb-5 flex flex-row">
                <h1 className="mb-5 mr-5">GitHub:</h1>
                <Link href="https://github.com/CheXiangHeck" className="underline cursor-pointer font-xl">
                https://github.com/CheXiangHeck
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;