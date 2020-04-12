import React, { useState } from 'react';
import styled from 'styled-components/native'
import { ProductType, AttributeType } from '@/store/product/types';
import { formatMoney } from '@/service/helper';

const SWrapper = styled.ScrollView`
    height: 100%;
    width: 100%;
`

const SText = styled.Text`

`

const SImage = styled.Image`
    height: 300px;
    width: 100%;
`

const SName = styled.Text`

`
const SVariant = styled.Text`
`

const SCost = styled.Text``

const SSale = styled.Text``

const SReal = styled.Text``


const SSectionTitle = styled.Text`
`
const SRow = styled.View`
    flex-direction:row;
    align-items: center;
`

const SCategory = styled.Text`
    flex:1;
`

const SValue = styled.Text`
    flex:2;
`

const data = {
    "code": 0, "message": null,
    "data": {
        "productId": 425, "categoryId": 9, "hasVariant": 1, "createdBy": 1, "url": "tranh-son-dau-lan-vu-lavu0139", "name": "Tranh Sơn Dầu Lân Vũ LAVU0139", "description": "", "download": 0, "status": true, "rate": 0.0, "searchKey": null, "updateTime": "2020-03-18T17:36:11", "images": "297",
        "variants": [
            {
                "id": 361, "productId": 425, "weight": null, "height": null, "length": null, "wide": null,
                "description": null, "status": true,
                "code": "LAVU013988", "productName": null,
                "attrs": null,
                "shop":
                    [{
                        "id": 353, "userId": 7,
                        "variantId": 361, "price": 3900000,
                        "images": "297", "amount": 1, "sale": null, "priceSale": null, "isAllow": 1
                    }],

                "attribute": [{
                    "id": 73, "code": "80x80cm", "name": "80x80cm", "categoryID": 14,
                    "categoryName": "Kích thước"
                }],
                "images": [{ "id": 297, "description": "LAVU0139", "note": null, "name": "LAVU0139", "author": null, "replaceText": "LAVU0139", "url": "2020/03/18/LAVU0139.jpg", "imageUrl": "http://35.187.240.92:8089/images/2020/03/18/LAVU0139.jpg", "createdBy": 1, "diskRoot": "D:\\Media", "createdTime": "2020-03-18T17:35:46" }]
            }], "files":
            [{ "id": 447, "name": null, "productId": 425, "link": "gagoda.vn", "softwareId": 1 }, { "id": 448, "name": null, "productId": 425, "link": "gagoda.vn", "softwareId": 1 }],
        "media": [{
            "id": 297, "description": "LAVU0139", "note": null, "name": "LAVU0139", "author": null, "replaceText": "LAVU0139", "url": "2020/03/18/LAVU0139.jpg",
            "imageUrl": "http://35.187.240.92:8089/images/2020/03/18/LAVU0139.jpg", "createdBy": 1, "diskRoot": "D:\\Media", "createdTime": "2020-03-18T17:35:46"
        }]
    }
}


const getAttributeList = (product: ProductType) => {
    let attributeObject = {};
    product.variants.forEach(variant => {
        variant.attribute.forEach(att => {

            const addAttributeVal = {
                name: att.name,
                code: att.code,
                variantId: variant.id,
                categoryId: att.categoryID
            }
            if (attributeObject[att.categoryName]) {
                attributeObject[att.categoryName].push(addAttributeVal)
            } else {
                attributeObject[att.categoryName] = [addAttributeVal]
            }
        })
    })
    return attributeObject;
}

const ProductDetail = React.memo(() => {

    const [product, setProduct] = useState<ProductType>(data.data)


    const activeVariant = product.variants[0];
    const activeShop = product.variants[0].shop[0];
    // const [selectedAttributeVal, setSelectedAttributeVal] = useState<string>()

    const attributeObject = getAttributeList(product);
    return (
        <SWrapper>
            <SImage
                source={{ uri: product.media[0].imageUrl }}
            />
            <SName>
                {product.name}
            </SName>
            <SVariant>SKU: {activeVariant.code} </SVariant>
            <SCost>
                <SSale>{formatMoney(activeShop.price)}</SSale>
                <SReal></SReal>
            </SCost>
            <SSectionTitle>
                thong tin chi tiet
            </SSectionTitle>
            <SRow>
                {
                    Object.keys(attributeObject).map(key => {
                        return (<>
                            <SCategory>{key}</SCategory>
                            <SValue>{attributeObject[key][0].name}</SValue>
                        </>)
                    })
                }
            </SRow>
        </SWrapper>
    )
})

export default ProductDetail;