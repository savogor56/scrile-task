import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../services/hooks"
import { fetchUsers } from "../../../../store/users/operations"
import { Loader } from "../../../Loader"
import { User } from "../User"
import s from "./style.module.scss"

interface Props {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    onClose: () => void
}

export const UserList: React.FC<Props> = ({ search, setSearch, onClose}) => {
    const dispatch = useAppDispatch()
    const {usersData, isFetching} = useAppSelector(state => state.users)

    const handleSelect = (name: string) => {
        setSearch(name)
        onClose()
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div className={s.root}>
            {!isFetching &&
                usersData?.filter(({name}) => name.indexOf(search) > -1).map(user => (
                    <User key={user.id} user={user} onSelect={handleSelect} />
                ))
            }
            {isFetching && <Loader />}
        </div>
    )
}