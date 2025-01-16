
import { Container, Background, Form } from "./style";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>

                    <h2>Crie sua conta</h2>
                        <Input title="Nome" type="text" placeholder ="Digite seu Nome" icon={FiUser} />
                        <Input title="E-mail" type="email" placeholder ="Digite seu e-mail" icon={FiMail} />
                        <Input title="Senha" type="password" placeholder ="Digite sua senha" icon={FiLock} />
                        <Button title="Entrar" />

                < Link to ="/" > <FiArrowLeft />Voltar para o Login</Link>
            </Form>
                <Background alt= "Cadeiras de cinema"/>
        </Container>
    )
}