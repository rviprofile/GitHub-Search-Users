import { useState } from 'react';
import { store } from '../../store/store';
import * as S from './resultSearchingBlock.styles';
import { UserOnSearch } from '../userOnSearch/userOnSearch.jsx';
import correctEnding from '../../helpers/correctEnding.js';

export const ResultSearchingBlock = () => {
    const [payload, setPayload] = useState({ total_count: 0, items: [] });
    store.subscribe(() =>
        setPayload(store.getState().serach.resultSearch.content)
    );
    return (
        <S.Block>
            {payload.total_count > 0 ? (
                <p>Найдено {payload.total_count} {correctEnding(payload.total_count)}</p>
            ) : (
                ''
            )}
            {payload.items.map((item) => {
                return <UserOnSearch user={item} key={item.id} />;
            })}
        </S.Block>
    );
};
