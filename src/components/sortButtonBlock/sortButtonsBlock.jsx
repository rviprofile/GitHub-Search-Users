import correctEnding from '../../helpers/correctEnding';
import { SortButton } from '../sortButton/sortButton';
import * as S from './sortButtonsBlock.styles';

export const SortButtonsBlock = ({ count }) => {
    return (
        <S.SortButtonsBlock>
            <p>
                Найдено {count} {correctEnding(count)}
            </p>
            <div>
                Сортировать по:
                <SortButton purpose="repositories" />
                <SortButton purpose="followers" />
            </div>
        </S.SortButtonsBlock>
    );
};
