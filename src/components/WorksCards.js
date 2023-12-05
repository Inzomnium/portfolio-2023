import { Col, Image } from "react-bootstrap"







export const WorkCards = ({title, subtitle, description, imgUrl, year, link, type}) => {
    
    return (
     
    <Col
    
    
    xs={3} className="card-work">
    <a href={`pag${type}`}>
    <Image roundedCircle src={imgUrl} />
    <h4>{title} : {subtitle} </h4>
    </a>
    </Col>
    )







}