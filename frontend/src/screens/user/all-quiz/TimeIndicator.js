import React from "react";
import Countdown from "react-countdown";

const TimerContent = ({ time, unit }) => {
    return (
        <div className="mr-2 rounded  shadow-md text-center border border-primary">
            <div className="text-4xl m-0 font-bold px-4 leading-tight ">
                {" "}
                {time}
            </div>
            <div className="text-white text-sm mt-0 bg-primary px-4 ">
                {unit}
            </div>
        </div>
    );
};

const TimeIndicator = ({ time = 0, onComplete }) => {
    const renderer = ({ minutes, seconds }) => {
        return (
            <div
                className={`flex   ${
                    minutes >= 2
                        ? "text-green"
                        : minutes >= 1
                        ? "text-orange"
                        : "text-red-500"
                }`}
            >
                <TimerContent time={minutes} unit="minutes" />
                <TimerContent time={seconds} unit="seconds" />
            </div>
        );
    };
    return (
        <div className="bg-white border-gray-200 border-2 p-4 w-full shadow-lg flex flex-col justify-center items-center rounded-md">
            <h1 className="mb-2 text-base">Time Indicator</h1>
            <Countdown
                date={Date.now() + time * 60 * 1000}
                renderer={renderer}
                onComplete={onComplete}
            />
        </div>
    );
};

export default TimeIndicator;
