import { Row, Col } from 'react-bootstrap';
import * as Unicons from '@iconscout/react-unicons';


export const Footer = () => {

return(

    <footer>
        <Row>
            <Col lg={12} className='d-flex flex-column align-items-center'>
                <h5 className='m-0'>Contact</h5>
                <ul className='d-flex list-unstyled flex-row m-0'>
                    <li className= 'p-1 align-content-center'><Unicons.UilEnvelope size="18" className= 'm-1' /><a href="mailto:sebacofrebarrientos@gmail.com">sebacofrebarrientos@gmail.com</a></li>
                    <li className= 'p-1 align-content-center'><Unicons.UilLocationPoint size="18" className= 'm-1' /> Málaga, Andalucia, Spain</li>
                </ul>
            </Col>
           
        </Row>
        <p className=' p-1 text-center'><Unicons.UilCopyright size="18" className="mx-1"  />  Copyright 2024 to Sebastian Cofre, All right reserved</p>
        <small className='d-flex w-100 p-1 text-center align-items-center justify-content-center'>This portfolio is powered by <Unicons.UilReact />React  </small>
    </footer>
)


}