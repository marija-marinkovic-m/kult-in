import React from 'react';
import Link from 'gatsby-link';
import { Grid, Button } from 'material-ui';
import logoImage from '../../images/logo.png';
import styled from '../../utils/styled';

const HeaderWrapper = styled(Grid, {
  component: 'header',
  container: true,
  spacing: 16,
})(theme => ({
  background: theme.palette.background.default,
}));
const HeaderContent = styled(Grid)(theme => ({
  textAlign: 'center',
}));
const Navigation = styled('nav')(theme => ({
  padding: `${theme.spacing.unit * 2}px 0`,
}));
const Title = styled('h1')(theme => ({
  margin: 0,
}));
const Logo = styled('img')(theme => ({
  marginTop: theme.spacing.unit * 4,
  height: 96,
}));
const NavLink = styled(Button, { component: Link })(theme => ({
  color: 'gray',
}));

const Header = ({ data: { site } }) => (
  <HeaderWrapper>
    <HeaderContent item xs={12}>
      <Link to="/">
        <Logo src={logoImage} alt={site.siteMetadata.title} />
      </Link>
      <Navigation>
        <NavLink to="/">Naslovna</NavLink>
        <NavLink to="/putovanja">Putovanja</NavLink>
        <NavLink to="/hrana">Hrana</NavLink>
        <NavLink to="/stil">Stil</NavLink>
        <NavLink to="/komunikacije">Komunikacije</NavLink>
        <NavLink to="/zdravlje">Zdravlje</NavLink>
      </Navigation>
    </HeaderContent>
  </HeaderWrapper>
);

export default Header;
