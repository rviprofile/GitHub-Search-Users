import { useState } from 'react';
import * as S from './modalSort.styles';
import { store } from '../../store/store';
import { newSort } from '../../store/actions/creators/creators';

export const ModalSort = () => {
    const [isActive, setIsActive] = useState(false);
    const [currentSort, setCurentSort] = useState({ id: 0 });

    const hadleClickItem = (id) => {
        setIsActive(false);
        switch (id) {
            case currentSort.id: {
                setCurentSort({ title: 'Умолчанию', id: 0 });
                store.dispatch(newSort(undefined));
                return;
            }
            case 1: {
                setCurentSort({ title: 'Репозиториям ↓', id: 1 });
                store.dispatch(newSort('&sort=repositories'));
                return;
            }
            case 2: {
                setCurentSort({ title: 'Репозиториям ↑', id: 2 });
                store.dispatch(newSort('&sort=repositories&order=asc'));
                return;
            }
            case 3: {
                setCurentSort({ title: 'Подписчикам ↓', id: 3 });
                store.dispatch(newSort('&sort=followers'));
                return;
            }
            case 4: {
                setCurentSort({ title: 'Подписчикам ↑', id: 4 });
                store.dispatch(newSort('&sort=followers&order=asc'));
                return;
            }
            default: {
                return;
            }
        }
    };
    return (
        <S.ModalSortBlock>
            Сортировать по:
            <div>
                <S.SortButtton onClick={() => setIsActive(!isActive)}>
                    {currentSort.title ? currentSort.title : 'Умолчанию'}
                </S.SortButtton>
                {isActive ? (
                    <S.ModalList>
                        <S.ModalListItem
                            id="1"
                            onClick={() => hadleClickItem(1)}
                            isChoose={currentSort.id === 1}
                        >
                            Репозиториям ↓
                        </S.ModalListItem>
                        <S.ModalListItem
                            id="2"
                            onClick={() => hadleClickItem(2)}
                            isChoose={currentSort.id === 2}
                        >
                            Репозиториям ↑
                        </S.ModalListItem>
                        <S.ModalListItem
                            id="3"
                            onClick={() => hadleClickItem(3)}
                            isChoose={currentSort.id === 3}
                        >
                            Подписчикам ↓
                        </S.ModalListItem>
                        <S.ModalListItem
                            id="4"
                            onClick={() => hadleClickItem(4)}
                            isChoose={currentSort.id === 4}
                        >
                            Подписчикам ↑
                        </S.ModalListItem>
                    </S.ModalList>
                ) : (
                    ''
                )}
            </div>
        </S.ModalSortBlock>
    );
};
