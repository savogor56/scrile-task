import {UserData} from "../../../../services/types/users"

interface Props {
    user: UserData
}

export const User: React.FC<Props> = ({user}) => {
    return (
        <div>
            {User.name}
        </div>
    )
}