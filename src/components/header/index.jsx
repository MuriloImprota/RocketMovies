import { Container, Section, Profile } from "./style";
import { Input } from "../input";

export function Header() {

    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquisar pelo titulo" />
            <Section>
                <div>
                    <h3>Murilo Improta</h3>
                    <p>sair</p>
                </div>
                <Profile to ="/profile">
                    <img src="http://github.com/muriloimprota.png" alt="foto do perfil" />
                </Profile>
            </Section>
        </Container>

    )
}