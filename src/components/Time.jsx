import React from "react";
import "../styles/Time.css";

const Time = () => {
  const now = new Date();

  // Get the day of the week
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentMonth = months[now.getMonth()];
  const currentDay = days[now.getDay()];

  // Get the date
  const currentDate = now.getDate();
  const currentYear = now.getFullYear();

  // Get the time
  const currentHours = now.getHours().toString().padStart(2, "0");
  const currentMinutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = currentHours >= 12 ? "PM" : "AM";
  //   currentHours = currentHours % 12 || 12; // Convert hour '0' to '12'

  // Format date and time
  const formattedDate = `${currentDay}, ${currentDate} ${currentMonth}`;
  const formattedTime = `${currentHours}:${currentMinutes} ${ampm}`;

  return (
    <footer>
      <p>
        {formattedDate}, {formattedTime}
      </p>
    </footer>
  );
};

export default Time;
