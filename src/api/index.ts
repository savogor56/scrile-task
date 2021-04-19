import {instance} from "./config"
import {UserData, UserPhoto} from "../services/types/users"

export const usersApi = {
    async getUsers() {
        const response = await instance.get<UserData[]>('/users')
        return response.data
    },
    async getPhoto(id: number) {
        const response = await instance.get<UserPhoto>(`photos/${id}`)
        return response.data
    }
}