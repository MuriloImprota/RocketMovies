
import { Container, Background, Form } from "./style";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>

                    <h2>Faça seu Login</h2>
                    
                        <Input title="E-mail" type="email" placeholder ="Digite seu e-mail" icon={FiMail} />
                        <Input title="Senha" type="password" placeholder ="Digite sua senha" icon={FiLock} />
                        <Button title="Entrar" />

                <Link to="/register">Criar conta</Link>
            </Form>
                <Background alt= "Cadeiras de cinema"/>
        </Container>
    )
}