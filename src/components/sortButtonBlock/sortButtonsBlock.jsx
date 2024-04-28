import correctPhrase from '../../helpers/correctPhrase';
import { ModalSort } from '../modalSort/modalSort';
import * as S from './sortButtonsBlock.styles';

export const SortButtonsBlock = ({ count }) => {
    return (
        <S.SortButtonsBlock>
            {/* Если количество совпадений существует, покажем это количество */}
            {count >= 0 ? <p>{correctPhrase(count)}</p> : ''}
            {/* Если совпадений больше одного, предложим сортировку */}
            {count > 1 ? <ModalSort/> : ''}
        </S.SortButtonsBlock>
    );
};
