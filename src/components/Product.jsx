import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Product({ product }) {
    return (
        <Card className='my-3 p-2 border border-1 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} className='rounded rounded-lg' />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title> <strong>{product.name}</strong></Card.Title>
                </a>
                <Card.Text as="div">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </Card.Text>
                
                    {product.countInStock >= 1
                    ? <Card.Text as="h5" className='text-success'>In Stock</Card.Text>
                    : <Card.Text as="h5" className='text-warning'>Out of Stock</Card.Text>}
                
                <Card.Text as="h3">
                    <strong>${product.price}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product




















/* <Card className='my-3 p-2 border border-1 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} className='rounded rounded-lg' />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <div className='my-2'>
                        <Card.Title> <strong>{product.name}</strong></Card.Title>
                    </div>
                </a>
                <Card.Text as="div">
                    <div className='my-3'>
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card> */