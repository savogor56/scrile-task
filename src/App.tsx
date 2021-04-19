import {useEffect} from "react"
import {useAppDispatch} from "./services/hooks"
import {fetchUsers} from "./store/users/operations"
import {Autocomplete} from "./components/Autocomplete"
import {Loader} from "./components/Loader"
import s from "./app.module.scss"

export const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    })

  return (
      <div className={s.root}>
        <Loader />
        <Autocomplete />
      </div>
  )
}