import { SearchButton } from '../searchButton/searchButton';
import * as S from './searchInput.styles';
import { useState } from 'react';

export const SearchInput = () => {
    // Значение в строке поиска
    const [inputValue, setInputValue] = useState('');

    return (
        <S.SearchBox>
            <S.Input
                type="text"
                name="search"
                placeholder="Введите логин на GitHub"
                onChange={(event) => setInputValue(event.target.value)}
            ></S.Input>
            <SearchButton login={inputValue}></SearchButton>
        </S.SearchBox>
    );
};
