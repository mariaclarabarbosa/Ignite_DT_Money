import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input placeholder="Busque por transações" type="text" />
      <button>
        <MagnifyingGlass />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
