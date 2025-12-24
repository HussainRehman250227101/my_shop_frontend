import React from 'react'
import { Card } from 'react-bootstrap'

function Product({ product }) {
    return (
        <Card className='my-3 p-2 border border-2 rounded'>
            <Card.Link href={`/product/${product._id}`}>
                <Card.Img src={product.image} className='rounded rounded-lg' />
            </Card.Link>
            <Card.Body>
                <Card.Link href={`/product/${product._id}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Link>
                <Card.Text>
                    `{product.rating} from {product.numReviews} reviews`
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
