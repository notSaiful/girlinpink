import { useState, useEffect } from 'react';

// Pre-launch countdown target: September 9th, 2026 at 20:00:00 IST (8:00 PM)
export const TARGET_LAUNCH_DATE_STR = '2026-09-09T20:00:00+05:30';
export const TARGET_LAUNCH_LABEL = 'September 9, 2026 at 8:00 PM IST';

// Aliases for compatibility
export const TARGET_CUTOFF_DATE_STR = TARGET_LAUNCH_DATE_STR;
export const TARGET_CUTOFF_LABEL = TARGET_LAUNCH_LABEL;

export const useCountdown = (targetDate = TARGET_LAUNCH_DATE_STR) => {
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
        isPreLaunch: false,
        isLive: true,
        formatted: 'Pre-Orders Live!'
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
      isPreLaunch: true,
      isLive: false,
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
