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
                        <p>&copy;{new Date().getFullYear()} Developed by Kelvin Kellner. Designed by Kelvin Kellner, Ho Yin So (Colby), Natarini Sima, Ji-Ling Feng (Kitty).</p>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Footer;