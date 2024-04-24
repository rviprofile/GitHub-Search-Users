import correctPhrase from '../../helpers/correctPhrase';
import { SortButton } from '../sortButton/sortButton';
import * as S from './sortButtonsBlock.styles';

export const SortButtonsBlock = ({ count }) => {
    return (
        <S.SortButtonsBlock>
            {/* Если количество совпадений существует, покажем это количество */}
            {count >= 0 ? (
                <p>
                    {/* Функция возвращает результат поиска. 
                    Например "Найден 31 пользователь" или "Найдено 32 пользователя" */}
                    {correctPhrase(count)}
                </p>
            ) : (
                ''
            )}
            {/* Если совпадений больше одного, предложим сортировку */}
            {count > 1 ? (
                <div>
                    Сортировать по:
                    <SortButton purpose="repositories" />
                    <SortButton purpose="followers" />
                </div>
            ) : (
                ''
            )}
        </S.SortButtonsBlock>
    );
};
