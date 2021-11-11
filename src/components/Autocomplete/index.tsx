import React, { useState } from 'react';
import Autosuggest, {
  ChangeEvent,
  SuggestionSelectedEventData,
  SuggestionsFetchRequestedParams,
} from 'react-autosuggest';

import './styles.css';
import { ProductData } from 'common/types';

interface AutocompleteProps {
  onSelectValue: (prod: ProductData) => void;
  getSuggestions: (value: string) => ProductData[];
}

function renderSuggestion(prod: ProductData) {
  return <div>{prod.name}</div>;
}

function Autocomplete({ onSelectValue, getSuggestions }: AutocompleteProps) {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<ProductData[]>([]);

  const onSuggestionsFetchRequested = ({
    value,
  }: SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestions(value));
  };

  const onChange = (_: any, { newValue }: ChangeEvent) => {
    setValue(newValue);
  };

  const handleSuggestionSelected = (
    _: any,
    { suggestion }: SuggestionSelectedEventData<ProductData>
  ) => {
    onSelectValue(suggestion);
    setValue('');
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
      onSuggestionSelected={handleSuggestionSelected}
      getSuggestionValue={(prod: ProductData) => prod.name}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}

export default Autocomplete;
