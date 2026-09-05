import { useState, useEffect } from 'react';

// Hard cutoff date: September 20th at 11:59:59 PM IST
export const TARGET_CUTOFF_DATE_STR = '2026-09-20T23:59:59+05:30';
export const TARGET_CUTOFF_LABEL = 'September 20, 2026';

export const useCountdown = (targetDate = TARGET_CUTOFF_DATE_STR) => {
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return {
        total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
        formatted: 'Orders Closed'
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      total: difference,
      days,
      hours,
      minutes,
      seconds,
      isExpired: false,
      formatted: `${days}d ${hours}h ${minutes}m ${seconds}s`
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};
