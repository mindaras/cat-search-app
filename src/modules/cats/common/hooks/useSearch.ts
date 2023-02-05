import { URLSearchParamsInit, useSearchParams } from "react-router-dom";

interface SearchParams {
  page?: string;
  order?: string;
  breed?: string;
  search?: string;
}

const useSearch = () => {
  let [params, setParams] = useSearchParams();
  const page = params.get("page") || undefined;
  const order = params.get("order") || undefined;
  const breed = params.get("breed") || undefined;
  const search = params.get("search") || undefined;
  const searchParams: SearchParams = { page, order, breed, search };

  const setSearchParams = (newParams: SearchParams) => {
    const newSearchParams: SearchParams = {};

    if (newParams.page) newSearchParams.page = newParams.page;
    if (newParams.breed) newSearchParams.breed = newParams.breed;
    if (newParams.order) newSearchParams.order = newParams.order;
    if (newParams.search) newSearchParams.search = newParams.search;

    setParams(newSearchParams as URLSearchParamsInit);
  };

  return { searchParams, setSearchParams };
};

export { useSearch };
