import {Autocomplete} from "./components/Autocomplete"
import s from "./app.module.scss"

export const App = () => {
  
  return (
      <div className={s.root}>        
        <Autocomplete />
      </div>
  )
}