import SearchByLogin from '../../API/searchByLogin';
import * as S from './searchButton.styles';

export const SearchButton = ({login}) => {
    return (
        <S.SearchButton onClick={() => SearchByLogin(login)}>
            Поиск
        </S.SearchButton>
    );
};
