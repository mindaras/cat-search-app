import { useCallback, useEffect, useState } from "react";
import { LoaderContainer } from "./components/Cats.components";
import { Search } from "@common/components/search/Search";
import * as Types from "./common/models";
import { api, FilterParameters } from "./common/api";
import { Pagination } from "@common/components/pagination/Pagination";
import { Loader } from "@common/components/loader/Loader";
import { Optional } from "@common/components/Optional";
import { Filters, Option } from "@common/models";
import { List } from "./components/List";
import { useSearch } from "./common/hooks/useSearch";

const Cats: React.FC = () => {
  let { searchParams, setSearchParams } = useSearch();
  const [cats, setCats] = useState<Types.Cat[]>([]);
  const [breeds, setBreeds] = useState<Types.Breed[]>([]);
  const [isLoading, setLoading] = useState(false);
  const initialPageCount = 100;
  const [pageCount, setPageCount] = useState(initialPageCount);
  const { page: pageParam, order, breed, search: searchTerm } = searchParams;
  const page = pageParam || "1";
  const breedOptions = [
    { text: "Random breed", value: "" },
    ...breeds.map(({ id, name }) => ({
      text: name,
      value: id,
      selected: breed === id,
    })),
  ];
  const orderOptions = Object.entries(Types.Order).map(([key, value]) => ({
    text: value === Types.Order.Random ? "Random order" : key,
    value,
    selected: order === value,
  }));

  const getBreeds = useCallback(async () => {
    const { data } = await api.getBreeds();
    setBreeds(data);
  }, []);

  useEffect(() => {
    getBreeds();
  }, [getBreeds]);

  const getCat = useCallback(async (searchTerm: string) => {
    const { data } = await api.get({ searchTerm });
    setCats(data);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    getCat(searchTerm);
  }, [searchTerm, getCat]);

  const updatePageCount = useCallback(
    (newPageCount: number) => {
      if (order !== Types.Order.Random && newPageCount !== pageCount) {
        setPageCount(newPageCount);
      } else if (
        order === Types.Order.Random &&
        pageCount !== initialPageCount
      ) {
        setPageCount(initialPageCount);
      }
    },
    [pageCount, order]
  );

  const getCats = useCallback(
    async ({ page, order, breed }: FilterParameters) => {
      setLoading(true);

      const { data, pageCount: newPageCount } = await api.getAll({
        page,
        order,
        breed,
      });

      setCats(data);
      updatePageCount(newPageCount);
      setLoading(false);
    },
    [updatePageCount]
  );

  useEffect(() => {
    if (searchTerm) return;
    getCats({ page: parseInt(page) - 1, order, breed });
  }, [page, order, searchTerm, breed, getCats]);

  const onSearchTermChange = (term: string) => {
    setSearchParams({ ...searchParams, search: term });
  };

  const onOrderFilterChange = (option: Option) => {
    setSearchParams({ ...searchParams, order: option.value as string });
  };

  const onBreedFilterChange = (option: Option) => {
    setSearchParams({ ...searchParams, breed: option.value as string });
  };

  const onPageChange = (newPage: number) => {
    const pageParam = (newPage + 1).toString();

    if (pageParam !== page) {
      setSearchParams({ ...searchParams, page: pageParam });
    }
  };

  const filters: Filters = [
    {
      options: orderOptions,
      onChange: onOrderFilterChange,
    },
    {
      options: breedOptions,
      onChange: onBreedFilterChange,
    },
  ];

  return (
    <div>
      <Search
        value={searchTerm}
        filters={filters}
        disabled={isLoading}
        filtersDisabled={!!searchTerm}
        onChange={onSearchTermChange}
      />
      <Optional if={isLoading}>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </Optional>
      <Optional if={!isLoading}>
        <List cats={cats} />
      </Optional>
      <Optional if={cats.length > 1}>
        <Pagination
          page={parseInt(page, 10) - 1}
          total={pageCount}
          disabled={isLoading}
          onChange={onPageChange}
        />
      </Optional>
    </div>
  );
};

export { Cats };
