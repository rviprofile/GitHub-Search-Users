import SearchByLogin from '../../API/searchByLogin';
import { NewCurrentPage } from '../../store/actions/creators/search.creators';
import { store } from '../../store/store';
import * as S from './searchButton.styles';

export const SearchButton = ({ login }) => {
    function handleClickButton() {
        SearchByLogin(login);
        store.dispatch(NewCurrentPage(1));
    }
    return (
        <S.SearchButton onClick={() => handleClickButton(login)}>
            Поиск
        </S.SearchButton>
    );
};
