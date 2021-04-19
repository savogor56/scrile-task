import {AppDispatch} from "../index"
import {usersApi} from "../../api"
import {setIsFetching, setUsers} from "./index"

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    const users = await usersApi.getUsers()
    const usersWithPhoto = []
    for (let item of users) {
        const photo = await usersApi.getPhoto(item.id)
        usersWithPhoto.push({
            ...item,
            photo
        })
    }
    dispatch(setUsers(usersWithPhoto))
    dispatch(setIsFetching(false))
}