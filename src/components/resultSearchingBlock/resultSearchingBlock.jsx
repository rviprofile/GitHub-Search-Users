import { useState } from 'react';
import { store } from '../../store/store';
import * as S from './resultSearchingBlock.styles';
import { UserOnSearch } from '../userOnSearch/userOnSearch.jsx';
import { SortButtonsBlock } from '../sortButtonBlock/sortButtonsBlock.jsx';
import { CurrentUser } from '../currentUser/currentUser.jsx';

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

    return (
        <div
            style={{
                display: 'flex',
                flex_direction: 'column',
                align_items: 'center',
            }}
        >
            <S.Loader src="./loader.gif" alt="loader" isLoading={isLoading} />
            <CurrentUser />
            <S.Block isLoading={isLoading}>
                <SortButtonsBlock count={payload.total_count} />
                {payload.items.map((item) => {
                    return <UserOnSearch user={item} key={item.id} />;
                })}
            </S.Block>
        </div>
    );
};
