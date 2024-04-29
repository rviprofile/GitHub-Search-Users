import * as S from './userOnSearch.styles';
import infoAboutUser from '../../API/infoAboutUser';
import { format } from 'date-fns';

export const UserOnSearch = ({ user, isActive }) => {
    // Функция при клике на пользователя
    const handleClickUser = (user) => {
        infoAboutUser(user.url);
    };
    return (
        <S.UserContainer
            onClick={() => handleClickUser(user)}
            isactive={isActive}
        >
            <S.PhotoAndLoginBox isactive={isActive}>
                <S.UserImg src={user.avatar_url} isactive={isActive} />
                <S.LoginAndLinkBlock isactive={isActive}>
                    {user.login}
                    {isActive ? (
                        <S.Link href={user.html_url}>
                            <img
                                src="./github.svg"
                                alt="github-logo"
                                style={{ width: '30px' }}
                            />
                            Открыть на GitHub
                        </S.Link>
                    ) : (
                        ''
                    )}
                </S.LoginAndLinkBlock>
                {isActive ? (
                    <S.DescriptionBlock>
                        <p>Публичных репозиториев: <b>{user.public_repos}</b></p>
                        <p>Подписчиков: <b>{user.followers}</b></p>
                        <p>Создан: <b>{format(user.created_at, "dd.MM.yyyy")}</b></p>
                        <p>Изменён: <b>{format(user.updated_at, "dd.MM.yyyy")}</b></p>
                    </S.DescriptionBlock>
                ) : (
                    ''
                )}
            </S.PhotoAndLoginBox>
            {user.type === 'Organization' ? (
                <S.TypeOfUserImg src={'./person-combination.svg'} />
            ) : (
                <S.TypeOfUserImg src={'./person.svg'} />
            )}
        </S.UserContainer>
    );
};
