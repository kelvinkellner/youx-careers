import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Footer extends Component {
    render() {
        return (
            <>
                <hr />
                <Container id='footer'>
                    <Row>
                        <p>&copy; {new Date().getFullYear()}. Designed by Kelvin Kellner, Ho Yin So (Colby), Natarini Sima, Ji-Ling Feng (Kitty). Developed by Kelvin Kellner.</p>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Footer;