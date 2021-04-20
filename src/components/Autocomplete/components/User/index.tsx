import {UserData} from "../../../../services/types/users"
import s from "./style.module.scss"


interface Props {
    user: UserData
    onSelect: (name: string) => void
}

export const User: React.FC<Props> = ({user, onSelect}) => {
    return (
        <div onClick={() => onSelect(user.name)} className={s.root}>
            <div className={s.content}>
                <img src={user.photo?.url} alt=""/>
                <div className={s.userInfo}>
                    <div className={s.name}>{user.name}</div>
                    <div className={s.email}>{user.email}</div>
                </div>
            </div>
        </div>
    )
}