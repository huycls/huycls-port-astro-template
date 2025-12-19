import { useEffect, useState } from "react";

interface TimeData {
  dateTime: string;
  time: string;
  date: string;
  dayOfWeek: string;
  timeZone: string;
}

export const TimeDisplay = () => {
  const [timeData, setTimeData] = useState<TimeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTime = async () => {
    try {
      const response = await fetch(
        "https://timeapi.io/api/time/current/zone?timeZone=Asia%2FHo_Chi_Minh"
      );
      if (!response.ok) throw new Error("Failed to fetch time");
      const data = await response.json();
      setTimeData({
        dateTime: data.dateTime,
        time: data.time,
        date: data.date,
        dayOfWeek: data.dayOfWeek,
        timeZone: data.timeZone,
      });
      setError(null);
    } catch (err) {
      setError("Unable to load time");
      console.error("Error fetching time:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTime();
    // Update every second
    const interval = setInterval(fetchTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse"></div>
        <span>Loading time...</span>
      </div>
    );
  }

  if (error || !timeData) {
    return null; // Hide on error
  }

  return (
    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="font-medium">{timeData.time}</span>
      <span className="text-slate-400 dark:text-slate-500">•</span>
      <span>{timeData.dayOfWeek}</span>
    </div>
  );
};

