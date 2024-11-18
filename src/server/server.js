import axios from "axios";

export const request = axios.create(
  {
    baseURL: "fvfdcswdefvcdef",
  },
  {
    Headers: {
      "Content-Type": "application/json",
      Authorization: `Berar ${localStorage.getItem("token")}`,
    },
  }
);
