import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {UserData} from "../../services/types/users"

export const users = createSlice({
    name: 'users',
    initialState: {
        isFetching: false,
        usersData: null as UserData[] | null
    },
    reducers: {
        setIsFetching: (state, {payload}: PayloadAction<boolean>) => {
            state.isFetching = payload
        },
        setUsers: (state, {payload}: PayloadAction<UserData[]>) => {
            state.usersData = payload
        }
    }
})

export default users.reducer
export const {setIsFetching, setUsers} = users.actions