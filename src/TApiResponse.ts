import { useState, useEffect } from "react";

export type TApiResponse = {
  name: String;
  error: any;
  loading: Boolean;
};

export const useApiGet = (url: string): TApiResponse => {
  const [name, setName] = useState<String>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const getData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { name, error, loading };
};
