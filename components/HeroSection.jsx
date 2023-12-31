import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <main className="py-16 mt-16 md:flex md:shrink-0">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 md:col-span-8 place-self-center justify-self-start"
                >
                    <h1 className="font-extrabold">
                        <span className="text-white text-8xl">
                            Hello, I&apos;m{" "}
                            <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-cyan-500 to-blue-500 ...">
                                Wei Xiang
                            </span>
                        </span>
                        <span className="text-7xl">
                            <TypeWritter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('<span style="color:#ffff99">Web Developer</span>')
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString('<span style="color:#d580ff">Software Engineer</span>')
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .start();
                                }}
                            ></TypeWritter>
                        </span>
                        <p className="text-sky-100 mt-8 text-base sm:text-lg md:text-xl mb-6">Slide down to know more about me!</p>
                        <Link
                            href="https://drive.google.com/drive/folders/1IEBHFo4H37wx-soBUx-ldFxEAuQiA0No?usp=sharing"
                            className="px-6 inline-block py-3 rounded-full border-2 border-pink-500 hover:bg-pink-500"
                        >
                            View My Resume
                        </Link>
                    </h1>
                </motion.div>
                <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
                    <div className="w-[400px] h-[400px] relative z-0">
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;