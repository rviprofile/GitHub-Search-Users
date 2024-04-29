import { useState } from 'react';
import * as S from './modalSort.styles';
import { store } from '../../store/store';
import { NewCurrentPage, newSort } from '../../store/actions/creators/creators';

export const ModalSort = () => {
    // Состояние активно ли окно с выбором сортировки
    const [isActive, setIsActive] = useState(false);

    // Состояние с выбранной сортировкой
    const [currentSort, setCurentSort] = useState({ id: 0 });

    // Функция после нажатия на одну из сортировок
    const hadleClickItem = (id) => {
        // Список вариантов сортировки больше не виден
        setIsActive(false);
        // Актуальная страница в поиске теперь 1
        store.dispatch(NewCurrentPage(1));
        // По id мы понимаем на какую сортировку нажали и что нужно сделать
        switch (id) {
            // Нажали на уже выбранную сортировку
            case currentSort.id: {
                // Сокртировка отменяется
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
                            key="1"
                            onClick={() => hadleClickItem(1)}
                            isChoose={currentSort.id === 1}
                        >
                            Репозиториям ↓
                        </S.ModalListItem>
                        <S.ModalListItem
                            key="2"
                            onClick={() => hadleClickItem(2)}
                            isChoose={currentSort.id === 2}
                        >
                            Репозиториям ↑
                        </S.ModalListItem>
                        <S.ModalListItem
                            key="3"
                            onClick={() => hadleClickItem(3)}
                            isChoose={currentSort.id === 3}
                        >
                            Подписчикам ↓
                        </S.ModalListItem>
                        <S.ModalListItem
                            key="4"
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
