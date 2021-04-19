export interface UserData {
    id: number
    name: string
    username: string
    email: string
    address: UserAddress
    phone: string
    website: string
    company: UserCompany
    photo?: UserPhoto
}

export interface UserAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: UserGeo
}

export interface UserGeo {
    lat: string
    lng: string
}

export interface UserCompany {
    name: string
    catchPhrase: string
    bs: string
}

export interface UserPhoto {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}