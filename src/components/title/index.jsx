import { Container } from "./style";

export function Title({ title, ...rest }) {
    return (
        <Container {...rest}>

            {title}

        </Container>

    )
}