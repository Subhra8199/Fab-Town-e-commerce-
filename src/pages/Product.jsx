import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Discriptionbox from '../Components/DiscriptionBox/Discriptionbox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
    const {all_product} = useContext(ShopContext)
    const {id} = useParams()
    const product = all_product.find((e)=>e.id === Number(id))
    return (
        <div>
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
            <Discriptionbox/>
            <RelatedProducts/>
        </div>
    )
}

export default Product
