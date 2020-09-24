import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Input from '@material-ui/core/Input';
import "./Search.css";

interface SearchProps {
  procuraEnderecoDestino: Function;
}

const Search: React.FC<SearchProps> = ({ procuraEnderecoDestino }) => {
  const [enderecoProcurado, setEnderecoProcurado] = useState("");
  return (
    <div className="__search-form">
        <Input
            className="__search-input"
            placeholder="Endereço"
            value={enderecoProcurado} 
            onChange={(e) => setEnderecoProcurado(e.target.value)}
        />
        <Button 
          className="__search-button"   
          onClick={(e) => {procuraEnderecoDestino(enderecoProcurado)}}
        >
          <SearchIcon className="__search-button-icon"/>
        </Button>
    </div>
  );
};

export default Search;
