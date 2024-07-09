import { useLocation } from "react-router-dom"

import Message from "../layout/Message"

export default function Projects(){
    const location = useLocation();
    let message = ''
    if(location.state){
        message = location.state.message
        console.log('message -------->', message)
    }

    return (
        <div>
            <h1>Meu Projetos</h1>
            {message && <Message type="success" msg={message}/>}
        </div>
    )
}