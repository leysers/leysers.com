import styled from 'styled-components';

import NavLink from './NavLink';

const Nav = styled.nav`
  background-color: 'red';
  ul {
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      margin-right: 35px;
      :last-child {
        margin-right: 0;
      }
    }
  }
`;

const links = [
  { title: 'Home', path: '/home' },
  { title: 'Me', path: '/about' },
  { title: 'Google', path: '/google' },
  { title: 'test', path: '/google' }
];

const Navigation = () => {
  return (
    <Nav>
      <ul>
        {links.map(({ title, path }) => (
          <NavLink title={title} path={path} key={title} />
        ))}
      </ul>
    </Nav>
  );
};

export default Navigation;
