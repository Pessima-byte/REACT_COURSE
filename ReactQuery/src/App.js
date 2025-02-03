//Import the Styles as a module 
import React from 'react';
import styles from "./App.module.css";
import {QueryClient,QueryClientProvider,useQuery} from "@tanstack/react-query";
import axios from "axios";



const Client = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={Client}>
    <div className={styles.App}>
      <RandomCatFact /> 
    </div>
    </QueryClientProvider>
  );
}

// Generate random cat fact
const RandomCatFact = ()=>{

  const {data, isLoading, isError, error ,refetch} = useQuery({
    queryKey: ["cat"],
    queryFn: () => axios.get("https://catfact.ninja/fact").then((res)=>res.data),
  })



  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }



  return (
    <div>
      <h1>{data?.fact}</h1>
      <button onClick={refetch}>Generate Fact</button>
    </div>
  )
}


export default App;
