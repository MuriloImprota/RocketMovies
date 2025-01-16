import { Container } from "./style";
import { Link } from "react-router-dom";

export function Button({ title, loading = false, isNew = false, ...rest }) {
    return (
        <Container
            type="button"
            disabled={loading}
            isNew={isNew}
            {...rest}
        >
            {loading ? "loading..." : title}
        </Container>
    );
}
