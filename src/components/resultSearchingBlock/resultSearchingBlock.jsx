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
    // Состояние с выбранным пользователем
    const [currentUser, setCurrentUser] = useState({ id: 0 });

    // При обновлении состояний в store
    store.subscribe(() => {
        // Следим за общим результатом поиска, это нужно для рендера
        if (store.getState().search.resultSearch) {
            setPayload(store.getState().search.resultSearch.content);
        }
        // Следим выбран ли конкретный пользователь, его стили будут изменяться
        if (store.getState().search.currentUser) {
            setCurrentUser(store.getState().search.currentUser);
        }
        // Следим за статусом загрузки, чтобы менять видимость Loader и Block
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
            <S.Loader
                src="./loader.gif"
                alt="loader"
                loading={isLoading ? 'true' : undefined}
            />
            <S.Block loading={isLoading ? 'true' : undefined}>
                <SortButtonsBlock count={payload.total_count} />
                {payload.items.map((item) => {
                    return (
                        <UserOnSearch
                            user={
                                item.id === currentUser.id ? currentUser : item
                            }
                            key={item.id}
                            isActive={item.id === currentUser.id}
                        />
                    );
                })}
            </S.Block>
        </div>
    );
};
