import * as S from './sortButton.styles';

export const SortButton = ({ purpose }) => {
    switch (purpose) {
        case 'repositories': {
            return <S.SortButton>Репозиториям</S.SortButton>;
        }
        case 'followers': {
            return <S.SortButton>Подписчикам</S.SortButton>;
        }
        default: {
            return '';
        }
    }
};
