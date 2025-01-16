import { Container } from "./style";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Section } from "../../components/section";



export function Home() {
    return (
        <Container>
            <Header />
            <span>
                <h1>Meus filmes</h1>
                < Button to="/movieCreate/:id" title="Adicionar filme" style={{ width: '207px', height: '48px', marginRight: '170px' }}/>  

            </span>

            <div>
                <Section />
                <Section />
                <Section />
            </div>

        </Container>
    )
}