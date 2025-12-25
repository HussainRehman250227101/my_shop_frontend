import {React,useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Button, ListGroup, Image } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

function ProductScreen() {
    const params = useParams()
    const[product,setProduct] = useState([])
    useEffect(()=>{
        async function getproduct(){
            const {data} = await axios.get(`/api/products/${params.id}`)
            setProduct(data)
        }
        getproduct();
    },[])
    return (
        <div>
            <Link to="/" className='btn btn-dark text-white py-2 rounded rounded-lg my-3'>Go Back</Link>
            <Row className='my-3'>
                <Col md={6}>
                    <Image src={product.image} className='rounded rounded-lg' fluid ></Image>
                </Col>
                <Col md={3} >
                    <ListGroup>
                        <ListGroup.Item >
                            <h4><strong>{product.name}</strong></h4>
                        </ListGroup.Item>

                        <ListGroup.Item >
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>

                        <ListGroup.Item className='text-break' >
                            <strong>{product.description}</strong>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup className='border border-2'>
                        <ListGroup.Item className='border border-2'>
                            <Row>
                                <Col md={6} className='text-end'><h5 className='m-0'>Price :</h5></Col>
                                <Col md={6} className='text-center'><h5 className='m-0'>${product.price}</h5></Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item className='border border-2'>
                            <Row>
                                <Col md={6} className='text-end'><h5 className='m-0'>Status :</h5></Col>
                                {product.countInStock > 0
                                    ? <Col md={6} className='text-end text-success'><h5 className='m-0'>In Stock</h5></Col>
                                    : <Col md={6} className='text-center text-warning'><h5 className='m-0'>Out of Stock</h5></Col>}
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item className='border border-2'>
                            <Row>
                                <Col md={6} className='text-end'><h5 className='m-0'>Qty :</h5></Col>
                                <Col md={6} className='text-center'><h5 className='m-0'>{product.countInStock}</h5></Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item className='border border-2 '>
                            <Row >
                                <Col className='d-flex flex-row' md={12}><Button className='btn btn-dark text-white flex-fill' disabled={product.countInStock == 0 }>Add to Cart</Button></Col>
                            </Row>
                        </ListGroup.Item>



                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
