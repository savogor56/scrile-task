import {ReactComponent as SearchIcon} from "./assets/SearchIcon.svg"
import {UserList} from "./components/UserList"
import s from "./style.module.scss"
import { useEffect, useRef, useState } from "react"

export const Autocomplete = () => {
    const [display, setDisplay] = useState(false)
    const inputEl = useRef<HTMLInputElement | null>(null)
    const autoRef = useRef<HTMLDivElement | null>(null)
    const [search, setSearch] = useState('')

    const handleDisplay = () => {
        setDisplay(prevState => !prevState)
    }

    const handleClick = () => {
        inputEl.current?.focus()
        handleDisplay()
    }

    const handleClickOutside = (e: MouseEvent) => {
        const {current: auto} = autoRef
        if (auto && !auto.contains((e.target as Node))) {
            setDisplay(false)
        }      
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div ref={autoRef}>
            <div className={s.inputWrap} onClick={handleClick}>
                <SearchIcon />
                <input 
                    type="text"
                    placeholder="Search" 
                    ref={inputEl}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            { display && <UserList search={search} setSearch={setSearch} onClose={handleDisplay} /> }
        </div>

    )
}