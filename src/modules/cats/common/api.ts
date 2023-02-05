import { apiClient } from "@common/network/apiClient";
import { toDataResponse } from "./mappers";
import { Breed, Cat } from "./models";

const baseUrl = "https://api.thecatapi.com/v1";

const options = {
  headers: {
    "x-api-key":
      "live_r8MgPKaoyvCnkZeZk33jzOxd9IzvNK0iu2hA2FQ7eGzLLSgwFsrP81TGuLiKtPfp", // public test key
  },
};

export interface FilterParameters {
  page: number | string;
  order?: string;
  breed?: string;
}

const getAll = async ({ page, order, breed }: FilterParameters) => {
  const limit = 12;
  const url = new URL(baseUrl);
  url.pathname += "/images/search";
  url.searchParams.append("limit", limit.toString());

  if (page) url.searchParams.append("page", page.toString());
  if (order) url.searchParams.append("order", order);
  if (breed) url.searchParams.append("breed_ids", breed);

  try {
    const { data: response, headers } = await apiClient.get<Cat[]>(
      url.toString(),
      options
    );
    const count = headers?.get("pagination-count") || "0";
    const pageCount = Math.floor(parseInt(count, 10) / limit);
    const data = toDataResponse<Cat[]>(response);
    return { data, pageCount };
  } catch (err) {
    return { data: [], pageCount: 0 };
  }
};

interface SearchParameters {
  searchTerm: string;
}

const get = async ({ searchTerm }: SearchParameters) => {
  try {
    const { data } = await apiClient.get<Cat>(
      `${baseUrl}/images/${searchTerm}`
    );

    if (!data?.id) return { data: [] };

    return { data: [data] };
  } catch (err) {
    return { data: [] };
  }
};

const getBreeds = async () => {
  try {
    const { data: response } = await apiClient.get<Breed[]>(
      `${baseUrl}/breeds`
    );
    const data = toDataResponse(response);
    return { data };
  } catch (err) {
    return { data: [] };
  }
};

export const api = { getAll, get, getBreeds };
