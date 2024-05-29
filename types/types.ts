export type Topic = {
    _id: number
    title: string
    description: string
    createdAt: string
    updatedAt: string
    __v: number
}

export type Topics = {
    topics: Topic[]
}

export type TopicId = {
    _id: number
}
