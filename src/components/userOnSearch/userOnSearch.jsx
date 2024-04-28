import * as S from './userOnSearch.styles';

export const UserOnSearch = ({ user }) => {
    const handleClickUser = (user) => {
        console.log(user);
    };

    return (
        <S.UserContainer onClick={() => handleClickUser(user)}>
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
