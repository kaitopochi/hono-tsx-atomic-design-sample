import { FC } from 'hono/jsx'

const Button: FC<{ label: string }> = ({ label }) => {
  return <button>{label}</button>
}

export default Button