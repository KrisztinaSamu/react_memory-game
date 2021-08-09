import React from "react";
import { useEffect, useState } from "react";

export default function DateAndTime() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const date = new Date();

  const todayDate =
    date.getFullYear() +
    "." +
    String(date.getMonth() + 1).padStart(2, "0") +
    "." +
    String(date.getDate()).padStart(2, "0");

  const todayTime =
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0") +
    ":" +
    String(date.getSeconds()).padStart(2, "0");

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(todayTime);
      setCurrentDate(todayDate);
    }, 1000);
    return () => clearInterval(time);
  });

  const hour = new Date().getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }!`;
  return (
    <div className="clock-design">
      <p>{currentDate}</p>
      <p>{currentTime}</p>
      <p>{wish}</p>
    </div>
  );
}
