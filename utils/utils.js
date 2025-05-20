import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

const convertToMMDDYYYY = (dateString) => {
  // Create a new Date object from the input string
  const date = new Date(dateString);

  // Get the month, day, and year
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const day = date.getUTCDate().toString().padStart(2, "0");
  const year = date.getUTCFullYear();

  // Return the formatted date string
  return `${month}/${day}/${year}`;
};

export { convertToMMDDYYYY };

const getCurrencySymbol = (currencyCode) => {
  const currencySymbols = {
    USD: "$",
    EUR: "€",
    JPY: "¥",
    GBP: "£",
    AUD: "A$",
    CAD: "C$",
    CHF: "CHF",
    CNY: "¥",
    SEK: "kr",
    NZD: "NZ$",
    // Add more currency codes and their symbols as needed
  };

  // Return the symbol if it exists, otherwise return a default value or an error message
  return currencySymbols[currencyCode] || currencySymbols.USD;
};
export { getCurrencySymbol };

const toTitleCase = (str) => {
  return (
    str &&
    str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
};
export { toTitleCase };

const getCompletedSurveysInYear = (surveys, year) => {
  return surveys.filter((survey) => {
    const surveyYear = new Date(survey.surveyRewardedDate).getFullYear();
    return surveyYear === year;
  }).length;
};
export { getCompletedSurveysInYear };
const calculateTimeRemaining = (itemDate) => {
  const itemDateObj = new Date(itemDate);
  const today = new Date();

  // Calculate the difference in time (in milliseconds) and convert to days
  const diffDays = Math.ceil(
    (itemDateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  // If difference is less than or equal to 32 days, return it in days
  if (diffDays <= 32) {
    return `${diffDays} ${diffDays === 1 ? "day" : "days"}`;
  }

  // Calculate months and remaining days
  const months = Math.floor(diffDays / 30);
  const days = diffDays % 30;

  // Singular/plural formatting for month(s) and day(s)
  const monthStr = `${months} ${months === 1 ? "month" : "months"}`;
  const dayStr = days > 0 ? ` and ${days} ${days === 1 ? "day" : "days"}` : "";

  return `${monthStr}${dayStr}`;
};
export { calculateTimeRemaining };
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.error(e);
    return null;
  }
};
export const isTokenValid = (token) => {
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000; // Current time in seconds

    if (decoded.exp && decoded.exp < now) {
      console.log("Token expired");
      return false;
    }

    return true;
  } catch (error) {
    console.log("Invalid token:", error);
    return false;
  }
};
