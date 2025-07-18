import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer(){
    return<>
    <footer
      style={{
        backgroundColor: '#f8f9fa',
        padding: '1rem 0',
        borderTop: '1px solid #e0e0e0',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#6c757d',
        lineHeight: 1.5,
      }}
    >
        <Container fluid>
            <small>
                © 2025 Xuantao (Jeff) Zhang, UW-Madison.
                <br />
                Photos by Xuantao Zhang; photos courtesy of Muze Xiang (HK PolyU) and Haoxuan Li (HK PolyU)
            </small>
        </Container>

    </footer>
    </>
    
}