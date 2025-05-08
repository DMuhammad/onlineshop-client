import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Fungsi untuk menggabungkan class names
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Fungsi untuk memformat tanggal
export function formatDate(input) {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path) {
  return `${import.meta.env.VITE_APP_URL}${path}`;
}
