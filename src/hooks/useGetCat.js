import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetCat = () => {
  const {
    data,
    isLoading: isLoadingCat,
    refetch,
    error,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  const refetchCat = () => {
    refetch();
  };

  return { data, refetchCat, isLoadingCat };
};

export default useGetCat;
