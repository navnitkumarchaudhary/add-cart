import React from 'react';
import { Container } from './styles';

const Footer = () => {

  const str = `Copyright © 2020 Add Cart. All rights reserved. Terms of Use.`;
  return (
    <Container>
      <p>{str}</p>
    </Container>
  );
}

export default Footer;