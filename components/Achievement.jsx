import React from "react";

const Achievement = () => {
    const achievements = [
        {
            name: "Project",
            value: 5, 
        },
        {
            name: "Awards",
            value: 0,
        },
        {
            name: "Years",
            value: 2,
        },
    ];

    return(
        <div className="w-full h-[300px] bg-white text-black flex flex-col">
            <div className="bg-gradient-to-b from-black to-white p-6 h-[100px] w-full">
            </div>
            <div className="h-full w-full flex justify-center items-center">
                {achievements.map((achievement, index) => {
                    return(
                        <div
                            key={index}  {/* Add key prop here */}
                            className="flex flex-col justify-center items-center w-[200px] p-5"
                        >
                            <h2 className="text-emerald-400 font-bold text-4xl">
                                {achievement.value}
                            </h2>
                            <p className="text-base font-bold font-mono">
                                {achievement.name}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="bg-gradient-to-t from-black to-white p-6 h-[100px] w-full">
            </div>
        </div>
    ); 
};

export default Achievement;