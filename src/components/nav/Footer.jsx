import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return <>
    <footer
      role="contentinfo"
      style={{
        backgroundColor: '#f8f9fa',
        padding: '1rem 0',
        borderTop: '1px solid #e0e0e0',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#495057',
        lineHeight: 1.5,
      }}
    >
      <Container fluid>
        <address style={{ fontStyle: 'normal', margin: 0 }}>
          <p style={{ margin: '0.25rem 0' }}>
            © 2025 Xuantao (Jeff) Zhang, UW-Madison. <br/>
            Contact: (+1) 608-xxx-8181  Email: xzhang2733@wisc dot edu
          </p>
          <p style={{ margin: '0.25rem 0' }}>
            Photos by Xuantao Zhang; photos courtesy of Muze Xiang (HK PolyU) and Haoxuan Li (HK PolyU)
          </p>
        </address>
      </Container>

    </footer>
  </>

}