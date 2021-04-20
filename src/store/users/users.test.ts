import { UserData } from "../../services/types/users"
import users, { setIsFetching, setUsers } from "./"

const state = {
    isFetching: false,
    usersData: null as UserData[] | null
}

test('isFetching set true', () => {
    const action = setIsFetching(true)
    const newState = users(state, action)
    
    expect(newState.isFetching).toBe(true)
})

test('users should be added', () => {
    const usersData = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }
    ]
    const action = setUsers(usersData)
    const newState = users(state, action)

    expect(newState.usersData).not.toBeNull()
    expect(newState.usersData?.length).toBe(1)
})
