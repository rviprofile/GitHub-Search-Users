import * as S from './userOnSearch.styles';

export const UserOnSearch = ({ user }) => {
    return (
        <S.UserContainer>
            <S.PhotoAndLoginBox>
                <S.UserImg src={user.avatar_url} />
                {user.login}
            </S.PhotoAndLoginBox>
            {user.type === 'Organization' ? (
                <S.TypeOfUserImg src={'./person-combination.svg'} />
            ) : (
                <S.TypeOfUserImg src={'./person.svg'} />
            )}
        </S.UserContainer>
    );
};
