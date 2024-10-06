import { useEffect, useState } from "react";

const useFetch = (url : string) => {

  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal})
      .then(res => {
        if(!res.ok){
          throw Error('Error, could not fetch data.');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        if(err.name !== "AbortError"){
          setError(err.message);
          setIsPending(false);   
        }
        
      });
    }, 100);

    return () => abortCont.abort();
  }, [url]);

  return {data, isPending, error};
}

export default useFetch;