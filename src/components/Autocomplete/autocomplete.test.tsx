import {Autocomplete} from "./index"
import {render, unmountComponentAtNode} from "react-dom"

describe('Autocomplete component', () => {
    let container: HTMLDivElement
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        render(<Autocomplete />, container)
    })

    afterEach(() => {
        unmountComponentAtNode(container)
        container.remove()
    })

    it('input exist', () => {
        expect(container.querySelector('input')).not.toBeNull()
    })

    it('icon exist', () => {
        const icon = container.querySelector('svg')
        expect(icon).not.toBeNull()
    })
})