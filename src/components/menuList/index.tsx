export const MenuList = ({ href, title, setMenuOpen }) => {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a href={href}>{title}</a>
    </li>
  )
}
