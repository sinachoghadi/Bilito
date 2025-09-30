import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Convert English numbers to Persian numbers
 */
export function toPersianNumber(num: number | string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}

/**
 * Convert Persian numbers to English numbers
 */
export function toEnglishNumber(num: string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  let result = num;
  persianDigits.forEach((persianDigit, index) => {
    result = result.replace(new RegExp(persianDigit, 'g'), String(index));
  });
  return result;
}

/**
 * Format price in Persian with thousand separators
 */
export function formatPrice(price: number): string {
  const formatted = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return toPersianNumber(formatted);
}

/**
 * Format date in Persian
 */
export function formatDate(date: string): string {
  return toPersianNumber(date);
}