interface ProductType {
    productId: number
    categoryId: number
    hasVariant: number
    createdBy: number
    url: string
    name: string
    description: string
    download: number
    status: boolean
    rate? : string
    searchKey? :string
    updateTime: string
    images: string
    variants: VariantType[]
    files: null
}


interface VariantType {
    id: string
}

interface MediaType {
    id: number,
    description: string,
    note: string,
    name: string,
    author : null,
    replaceText: string,
    url: string,
    imageUrl: string,
    createdBy: number,
    diskRoot: string,
    createdTime: string
}