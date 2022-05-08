import { Button } from '@components/button'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { StyledContainer, StyledContent, StyledMenus } from './styles'

type MenuType = {
  name: string
  path: string
}

type LayoutProps = {
  menus: MenuType[]
}

export const Layout = ({ menus }: LayoutProps) => {
  const navigate = useNavigate()

  const handleHistoryPush = (path: string) => {
    navigate(path)
  }

  return (
    <>
      <StyledMenus>
        {menus.map(menu => (
          <Button onClick={() => handleHistoryPush(menu.path)}>{menu.name}</Button>
        ))}
      </StyledMenus>

      <StyledContent>
        <Outlet />
      </StyledContent>
    </>
  )
}
