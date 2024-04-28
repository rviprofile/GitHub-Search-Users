
import correctPhrase from '../../helpers/correctPhrase';
import { SortButtonFollowers } from '../sortButton/sortButtonFollowers';
import * as S from './sortButtonsBlock.styles';
import { SortButtonRepositories } from '../sortButton/sortButtonRepositories';

export const SortButtonsBlock = ({ count }) => {
    return (
        <S.SortButtonsBlock>
            {/* Если количество совпадений существует, покажем это количество */}
            {count >= 0 ? <p>{correctPhrase(count)}</p> : ''}
            {/* Если совпадений больше одного, предложим сортировку */}
            {count > 1 ? (
                <div>
                    Сортировать по:
                    <SortButtonRepositories purpose="repositories" />
                    <SortButtonFollowers purpose="followers" />
                </div>
            ) : (
                ''
            )}
        </S.SortButtonsBlock>
    );
};
