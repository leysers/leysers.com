import Link from 'next/link';

const NavLink = ({ title, path }) => {
  return (
    <li>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

export default NavLink;
