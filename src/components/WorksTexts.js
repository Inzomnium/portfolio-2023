import { Button } from "react-bootstrap"

export function WorkText ({cerrar,query}) {

    console.log(query[0])     

const year = query[0]
const type = query[1]
const description = query[2]

    return (

        <section> 
            
            <h1>{year}</h1>
            <small>{type}</small>
            <p>{description}</p>
            <Button className="btn btn-close"
             onClick={cerrar}  />
             
             
        </section>
 
    )
    }