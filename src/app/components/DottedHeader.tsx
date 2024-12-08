"use client"
import React, { useState, useEffect } from "react";

const DottedHeader: React.FC = () => {
  const [time, setTime] = useState({
    hours: 1,
    minutes: 20,
    seconds: 45,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex items-center justify-center space-x-3">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-black">{formatTime(time.hours)}</div>
        <div className="text-sm text-gray-500">Hours</div>
      </div>
      <span className="text-4xl font-bold text-black">:</span>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-black">{formatTime(time.minutes)}</div>
        <div className="text-sm text-gray-500">Minutes</div>
      </div>
      <span className="text-4xl font-bold text-black">:</span>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-black">{formatTime(time.seconds)}</div>
        <div className="text-sm text-gray-500">Seconds</div>
      </div>
    </div>
  );
};

export default DottedHeader;
