import {ReactComponent as SearchIcon} from "./assets/SearchIcon.svg"
import {UserList} from "./components/UserList"
import {useAppSelector} from "../../services/hooks"
import s from "./style.module.scss"

export const Autocomplete = () => {
    const users = useAppSelector(state => state.users.usersData)

    return (
        <div>
            <div className={s.inputWrap}>
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </div>
            {users && <UserList users={users} />}
        </div>

    )
}