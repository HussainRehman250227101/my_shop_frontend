import {useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product'
import { productsList } from '../actions/productsAction'
import Loader from '../components/Loader'
import Message from '../components/Message'

function HomeScreen({ product }) {

    const dispatch = useDispatch()
    const data = useSelector((state)=> state.productsList)
    const {error,loading,products} = data
    useEffect(() => {
        dispatch(productsList())

    }, [dispatch])

    console.log(`error : ${error}`)
    console.log(`type of products :`, typeof(products))
    console.log(`products : ${products}`)

    return (
        <div>
            <h1 className='my-3'>Latest Products</h1>

            {loading 
            ? <Loader/>
            : error 
            ? <Message variant='danger'>{error}</Message> 
            
            : <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}  className='mb-4'>
                        <Product product={product} />
                    </Col>
                ))}
            </Row> }
        </div>


    )
}

export default HomeScreen
