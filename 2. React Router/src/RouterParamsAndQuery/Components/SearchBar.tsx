import React, { FormEvent, useState } from "react";

interface SearchBarProps {
  search: (keyword: string) => void;
  defaultKeyword: string;
}

const SearchBar = ({ search, defaultKeyword }: SearchBarProps): JSX.Element => {
  const [keyword, setKeyword] = useState<string>(defaultKeyword);

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    search(keyword);
  };

  const onKeywordChangeHandler = (value: string): void => {
    setKeyword(value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="search movie by title"
        value={keyword}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          onKeywordChangeHandler(e.currentTarget.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
