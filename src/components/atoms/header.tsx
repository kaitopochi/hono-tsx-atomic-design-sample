import { FC } from 'hono/jsx'

const Header: FC<{ title: string }> = ({ title }) => {
  return <h1>{title}</h1>
}

export default Header