import React, { useState } from 'react';
import Autosuggest, {
  ChangeEvent,
  SuggestionsFetchRequestedParams,
} from 'react-autosuggest';

import './styles.css';
import { MOCK_DATA } from 'common/mock';
import { Product } from 'common/types';

function getSuggestions(value: string) {
  const inputValue = value.trim().toLowerCase();

  return inputValue
    ? MOCK_DATA.filter((prod) => prod.name.toLowerCase().includes(inputValue))
    : [];
}

function renderSuggestion(prod: Product) {
  return <div>{prod.name}</div>;
}

function Autocomplete() {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);

  const onSuggestionsFetchRequested = ({
    value,
  }: SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestions(value));
  };

  const onChange = (event: any, { newValue }: ChangeEvent) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: 'Enter item name',
    value,
    onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={(prod: Product) => prod.name}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}

export default Autocomplete;
