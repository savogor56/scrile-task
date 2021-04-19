import {UserData} from "../../../../services/types/users"
import {User} from "../User";

interface Props {
    users: UserData[]
}

export const UserList: React.FC<Props> = ({users}) => {
    return (
        <div>
            {
                users.map(user => (
                    <User user={user} />
                ))
            }
        </div>
    )
}