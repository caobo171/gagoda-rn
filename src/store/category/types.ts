export interface CategoryNodeType {
    id: number, 
    code: null , 
    name: string
    avatar: string
    parent_Id: number
    url: string
    status: number
    isShow: boolean
    level: number
    description: string
    count: number
    children: CategoryNodeType[]
    hasChildren: boolean
}