import React from "react";
import useGetCat from "../hooks/useGetCat";

const Cats = () => {
  const { data, isLoadingCat, refetchCat } = useGetCat();

  if (isLoadingCat) return <p>Loading....</p>;

  return (
    <>
      <h1>{data?.fact}</h1>
      <button onClick={refetchCat}>Refecth cat</button>
    </>
  );
};

export default Cats;
