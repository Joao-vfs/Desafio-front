import * as S from "@/components/Search/Search.styles";

import { ISearchComponentsProps } from "@/interfaces/ISearch.interface";

export function SearchComponent({
  resultSearch,
  handleIconClick,
  inputRef,
  isExpanded,
  handleInputChange,
  search,
  handleKeyUp,
}: Readonly<ISearchComponentsProps>) {
  return (
    <S.InputWrapper
      onSubmit={(e) => {
        e.preventDefault();
        resultSearch();
      }}
    >
      <S.Icon onClick={handleIconClick}>
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke={isExpanded ? "#8f8f8f" : "#ffffff"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M22 22L20 20"
            stroke={isExpanded ? "#8f8f8f" : "#ffffff"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </S.Icon>
      <S.Input
        ref={inputRef}
        type="text"
        name="text"
        placeholder={isExpanded ? "Pesquise seu filme" : ""}
        isExpanded={isExpanded}
        onChange={handleInputChange}
        value={search}
        onKeyUp={handleKeyUp}
      />
    </S.InputWrapper>
  );
}
