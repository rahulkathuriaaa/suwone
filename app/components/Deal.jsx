"use client"
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Advertisement = ({ date }) => {
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0
  });

  useEffect(() => {
    // update every secondF
    const interval = setInterval(() => {
      const updatedCountDown = calculateCountdown(date);
      updatedCountDown ? setCountDown(updatedCountDown) : clearInterval(interval);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  const calculateCountdown = (endDate) => {
    const diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    if (diff <= 0) return false;

    const timeLeft = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    if (diff >= 365.25 * 86400) {
      timeLeft.days = Math.floor(diff / (365.25 * 86400));
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
    }
    timeLeft.sec = diff;

    return timeLeft;
  };

  const addLeadingZeros = (value) => {
    return String(value).padStart(2, "0");
  };

  return (
    <div className="deal_ofthe_week" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="deal_ofthe_week_img">
              <img src="deal.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 text-right deal_ofthe_week_col">
            <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
              {/* <div className="flex-1 flex flex justify-center items-center md:my-10 my-10 relative">
                <h2 className="font-black text-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">Deal Of The Week</h2>
              </div> */}
              {/* <ul className="timer">
                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                  <div id="day" className="timer_num">
                    {addLeadingZeros(countDown.days)}{" "}
                  </div>
                  <div className="timer_unit">
                    {countDown.days === 1 ? "Day" : "Days"}
                  </div>
                </li>
                {/* Similar updates for other timer elements */}
              {/* </ul>  */}
              {/* <div className="red_button deal_ofthe_week_button">
                <a href="#">shop now</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Advertisement.propTypes = {
  date: PropTypes.string.isRequired
};

Advertisement.defaultProps = {
  date: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toString()
};

export default Advertisement;
