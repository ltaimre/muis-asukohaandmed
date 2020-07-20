import React from 'react'
import { Container, Row} from 'react-bootstrap';
const Layout = props => (
    <React.Fragment>
        <Container>
            <Row>
                {props.children}
            </Row>
        </Container>

    </React.Fragment>
);

export default Layout;
