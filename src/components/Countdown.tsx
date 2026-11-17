"use client";

import { useEffect, useState } from "react";


// Jueves 19 de noviembre de 2026, 19:00 hora de Ciudad de México (UTC-6)
export const LAUNCH_DATE = new Date("2026-11-19T19:00:00-06:00");

function getRemaining() {
  const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now());
  const total = Math.floor(diff / 1000);
  return {
    hours: Math.floor(total / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

function Box({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4">
      <div className="flex aspect-[4/5] w-24 items-center justify-center rounded-3xl border border-vino-claro bg-white sm:w-40 sm:rounded-[2.5rem] lg:w-64 lg:rounded-[3.5rem]">
        <span className="text-5xl font-bold tracking-[-0.07em] sm:text-7xl lg:text-[9.5rem]">
          {value}
        </span>
      </div>
      <span className="text-sm tracking-[-0.04em] sm:text-xl lg:text-3xl">{label}</span>
    </div>
  );
}

function Colon() {
  return (
    <div className="flex flex-col gap-3 pb-8 sm:gap-5 sm:pb-12 lg:gap-7 lg:pb-16" aria-hidden>
      <span className="size-2.5 rounded-full bg-vino sm:size-4 lg:size-6" />
      <span className="size-2.5 rounded-full bg-vino sm:size-4 lg:size-6" />
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(null);

  useEffect(() => {
    const tick = () => setTime(getRemaining());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  const fmt = (n: number | undefined) => (n === undefined ? "--" : pad(n));

  return (
    <div
      className="flex items-center justify-center gap-2 sm:gap-5 lg:gap-8"
      role="timer"
      aria-label="Tiempo restante para el lanzamiento"
    >
      <Box value={fmt(time?.hours)} label="HORAS" />
      <Colon />
      <Box value={fmt(time?.minutes)} label="MINUTOS" />
      <Colon />
      <Box value={fmt(time?.seconds)} label="SEGUNDOS" />
    </div>
  );
}
