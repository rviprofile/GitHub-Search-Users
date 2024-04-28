import { useState } from 'react';
import { store } from '../../store/store';
import * as S from './currentUser.styles';

export const CurrentUser = () => {
    const [currentUser, setCurrentUser] = useState();
    store.subscribe(() => {
        setCurrentUser(store.getState().search.CurrentUser);
    });
    if (currentUser) {
        return <S.Block></S.Block>;
    }
};
