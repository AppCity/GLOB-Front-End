import axios from "axios";

let FRONT_END_BASE_URL;
let BACK_END_BASE_URL = process.env.BACKEND_BASE_URL;

const HEADERS = {
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/json",
};

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // Development
  FRONT_END_BASE_URL = process.env.NEXT_PUBLIC_LOCALHOST;
} else {
  // Production
  FRONT_END_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL;
}

export const frontEndApi = axios.create({
  baseURL: FRONT_END_BASE_URL + "/api",
  headers: HEADERS,
});

export const backEndApi = axios.create({
  baseURL: BACK_END_BASE_URL,
  headers: HEADERS,
});
