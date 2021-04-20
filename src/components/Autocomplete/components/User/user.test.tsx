import {render, unmountComponentAtNode} from "react-dom"
import {act} from "react-dom/test-utils"
import {User} from "./index"

describe('User component', () => {
    let container: HTMLDivElement
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        unmountComponentAtNode(container)
        container.remove()
    })

    it('renders with userData',() => {
        const userData = {
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
            },
            "photo": {
                "albumId": 1,
                "id": 6,
                "title": "accusamus ea aliquid et amet sequi nemo",
                "url": "https://via.placeholder.com/600/56a8c2",
                "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
            }
        }

        const select = (name: string) => {
        }

        act(() => {
            render(<User user={userData} onSelect={select} />, container)
        })

        const name = container.querySelector('.name')
        expect(name).toHaveTextContent(userData.name)

        const email = container.querySelector('.email')
        expect(email).toHaveTextContent(userData.email)

        const img = container.querySelector('img')
        expect(img?.src).toBe(userData.photo.url)
    })
})