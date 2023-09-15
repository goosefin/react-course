import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      console.log(applyData);
      applyData(data);
    } catch (err) {
      console.log(err.message);
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    //   isLoading: isLoading,
    //   error: error,
    //   sendRequest: sendRequest
    // Shorter syntax version but is the same as above
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
