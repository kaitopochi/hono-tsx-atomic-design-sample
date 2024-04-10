import { FC } from 'hono/jsx'

const Input: FC<{ type: string; placeholder: string }> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />
}

export default Input