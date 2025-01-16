import { Container, Form } from "./style";
import { Input } from "../../components/input";
import { Marker } from "../../components/marker";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { TextArea } from "../../components/textarea";
import { Buttontag } from "../../components/buttontags";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export function MovieCreate() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <span>
                    < Link to ="/" ><FiArrowLeft />Voltar para o Login</Link>
                        <h1>Novo filme</h1>
                    </span>
                    <div>
                        <Input placeholder="Titulo" style={{ width: '315px', height: '48px' }} />
                        <Input placeholder="Sua nota (de 0 a 5)" style={{ width: '315px', height: '48px' }} />
                    </div>

                    <TextArea placeholder="Observações" style={{ width: '1000px', height: "274px" }} />

                    <Marker title="Marcadores">
                        <div className="tags">
                            <Buttontag value="React" style={{ width: "113px", height: "56px", marginRight: "-50px" }} />

                            <Buttontag IsNew placeholder="Novo Marcador" />
                        </div>
                    </Marker>

                    <div className="buttons">
                    <Button to ="/" title="Excluir filmes" isNew={true} />
                        <Button to ="/moviepreview" title="Salvar alterações" />
                    </div>
                </Form>
            </main>

        </Container>
    )
}