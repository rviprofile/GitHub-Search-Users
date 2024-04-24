import { useState } from 'react';
import { store } from '../../store/store';
import * as S from './resultSearchingBlock.styles';
import { UserOnSearch } from '../userOnSearch/userOnSearch.jsx';
import { SortButtonsBlock } from '../sortButtonBlock/sortButtonsBlock.jsx';

export const ResultSearchingBlock = () => {
    // Состояние для рендера списка пользователей
    const [payload, setPayload] = useState({ items: [] });
    // Сотояние состатусом загрузки
    const [isLoading, setIsLoading] = useState(false);

    store.subscribe(() => {
        if (store.getState().search.resultSearch) {
            setPayload(store.getState().search.resultSearch.content);
        }
        setIsLoading(store.getState().isLoading.status);
    });

    if (isLoading) {
        return (
            <img
                src="./loader.gif"
                alt="loader"
                className='loader'
            />
        );
    } else {
        return (
            <S.Block>
                <SortButtonsBlock count={payload.total_count} />
                {payload.items.map((item) => {
                    return <UserOnSearch user={item} key={item.id} />;
                })}
            </S.Block>
        );
    }
};
