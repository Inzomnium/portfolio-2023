import { Row, Col } from 'react-bootstrap';
import * as Unicons from '@iconscout/react-unicons';
import { Mailto } from './MailTo';

export const Footer = () => {

return(

    <footer>
        <Row className='m-0'>
            <div className='w-100 d-flex flex-column align-items-center'>
                <h5 className='m-0'>Contact</h5>
                <ul className='d-flex list-unstyled flex-row m-0'>
                    <li className= 'p-1 align-content-center'><Unicons.UilEnvelope size="18" className= 'm-1' /><Mailto email="mailto:sebacofrebarrientos@gmail.com" subject="Hey, send me an e-mail" body='thanks for getting in contact'>sebacofrebarrientos@gmail.com</Mailto></li>
                    <li className= 'p-1 align-content-center'><Unicons.UilLocationPoint size="18" className= 'm-1' /> Málaga, Andalucia, Spain</li>
                </ul>
            </div>
           
        </Row>
        <p className=' p-1 text-center'><Unicons.UilCopyright size="18" className="mx-1"  />  Copyright 2024 to Sebastian Cofre, All right reserved</p>
        <small className='d-flex w-100 p-1 text-center align-items-center justify-content-center'>This portfolio is powered by <Unicons.UilReact />React  </small>
    </footer>
)


}