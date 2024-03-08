import { NavigationList, NavItem, StyledLink } from "./NavMenu.styled"

const NavMenu = () => {
  return (
    <NavigationList>
      <NavItem>
        <StyledLink to="/">Home</StyledLink> 
      </NavItem>
      <NavItem>
        <StyledLink to="/catalog">Catalog</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </NavItem>
    </NavigationList>
  )
}

export default NavMenu
