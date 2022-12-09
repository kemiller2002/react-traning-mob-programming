import { useQuery, useMutation, useQueryClient, UseQueryResult } from "react-query";
import axios from "redaxios";

const client = axios.create({
  baseURL: "https://localhost:5001",
});

export class ConfigRegistry {
  category?: string;
  code?: string;
  description?: string;
  value?: Object;
}

export const useConfigRegistry = () => {
  const queryResult: UseQueryResult<ConfigRegistry[], unknown> = useQuery(
    ["registry"],
    async (): Promise<ConfigRegistry[]> => {
      // TODO: async method that calls the API to return data

      // Axios specific code... couldn't getting working due to CORS restriction on http-proxy
      const response = await client.get("/ConfigRegistryItem");
      return response.data;

      // Below is the code for interacting with the API directly with fetch
      // const response = await fetch("https://localhost:5001/ConfigRegistryItem");
      // return response.json();

      // return new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve(categories);
      //   }, 1000);
      // });
    },
    {
      keepPreviousData: true,
    }
  );

  const returnValue = {
    categories: queryResult.data ?? [],
    isFetching: queryResult.isFetching,
  };

  return returnValue;
};

export const useCreateConfigRegistry = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (configRegistry: ConfigRegistry) => {
      const response = await client.post("/ConfigRegistryItem", configRegistry);

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["registry"]);
      },
    }
  );

  return {
    mutateAsync: mutation.mutateAsync,
    error: mutation.error,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
  };
};
