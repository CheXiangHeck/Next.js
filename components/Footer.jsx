import React from "react";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="md:h-[300px] w-[full] h-fit mt-10">
            <div className="h-[2px] w-[full] bg-gradient-to-r from-[#ff00ff] to-[#00cccc]">
            </div>
            <div className="w-[full] h-[full] text-white flex flex-col p-10 justify-between">
                <div className="w-[full] h-[90%] justify-between flex md:flex-row flex-col">
                    <div className="md:w-[30%] md:h-[full] w-[full] h-fit mb-10">
                        <h1 className="font-bold mb-5 text-4xl">Website Objective</h1>
                        <p className="font-base tracking-widest">
                            This website is made for learning next.js, tailwind, react and other library. The content of the website is more towards about myself in my career. 
                        </p>
                    </div>
                    <div className="md:w-[30%] md:h-[full] w-[full] h-fit">
                        <div className="w-[full] md:h-[50%] h-[100px]">
                            <h1 className="font-bold mb-5 text-4xl">Social Media</h1>
                            <div className="w-[full] h-[70px] flex justify-around border-2 border-white p-2 rounded-2xl">
                                <div className="w-[50px] h-[full] cursor-pointer"
                                style={{background:'url(/projects/icons8-twitter-64.png)', backgroundSize:'100% 100%', backgroundRepeat:'no-repeat'}}>

                                </div>
                                <Link href="https://linkedin.com/in/wei-xiang-apu" className="w-[50px] h-[full] cursor-pointer"
                                style={{background:'url(/projects/icons8-linkedin-48.png)', backgroundSize:'100% 100%', backgroundRepeat:'no-repeat'}}>

                                </Link>
                                <Link href="https://www.facebook.com/che.weixiang.3" className="w-[50px] h-[full] cursor-pointer"
                                style={{background:'url(/projects/icons8-facebook-48.png)', backgroundSize:'auto', backgroundRepeat:'no-repeat'}}>

                                </Link>
                            </div>
                        </div>
                        <div className="md:h-[50%] h-[100px] mt-3 flex flex-row justify-between items-center">
                            <h1 className="font-bold mb-5 text-4xl">Author</h1>
                            <p className="font-bold">Che Wei Xiang</p>
                        </div>
                    </div>
                </div>
                <div className="mt-14 w-[full] h-[3%] flex justify-between border-t-2 border-solid border-white">
                    <p>Wei Xiang</p>
                    <p>Copyright &copy; All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;