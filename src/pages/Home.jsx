import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Home = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["cats"],
    queryFn: () => {
      return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div>
        <h1>Welcome,</h1>
        <p>{data?.fact}</p>
        <br />
        <button onClick={refetch}>Update Fetch </button>
      </div>
    </>
  );
};

export default Home;
