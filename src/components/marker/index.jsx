import { Container } from "./style";

export function Marker({ title, children }) {
    return (
        <Container>

            <h2>{title}</h2>
            {children}
        </Container>

    )
}