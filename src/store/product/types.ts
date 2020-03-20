export interface ProductType {
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
    files: null,
    media: MediaType[]
}


export interface VariantType {
    id: number,
    productId: number,
    description: string,
    code: string,
    shop: ShopType[],
    images: MediaType[],
    attribute: AttributeType[]
}


export interface ShopType{
    id: number,
    userId: number,
    variantId: number,
    price: number,
    images: string,
    amount: number,
    priceSale: number,
    isAllow: number
}


export interface AttributeType{
    id: number,
    code: string,
    name: string,
    categoryID: number,
    categoryName: string
}

export interface MediaType {
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