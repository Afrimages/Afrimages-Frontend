export interface ImageInterface{
    imageUrl: string,
    _id: string,
    creator: CreatorInterface,
    title: string
}

export interface CreatorInterface{
    profilePicture: string,
    _id: string,
    fullName: string
}