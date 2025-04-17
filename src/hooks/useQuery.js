import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalClick"],
    queryFn: async () => {
      return await api.get("/api/urls/myurls", {
        headers: {  
          "Content-Type": "application/json", 
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
    },
    select: (data) => {
      const sortedData = data.data.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
      return sortedData;
    },
    onError,
    staleTime: 500,
  });
};
