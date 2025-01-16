import { Container } from "./style";
import { FiPlus, FiX } from "react-icons/fi";

export function Buttontag({IsNew, value, onClick, ...rest}) {

    return (

        <Container IsNew={IsNew}>

            <input type="text" value={value} readOnly={!IsNew}{...rest}/>

            <button type="button" onClick={onClick} className={IsNew ? "button-add" : "button-delete"}>
                {IsNew ? <FiPlus/> :<FiX/>}
            </button>
        </Container>
    )

}