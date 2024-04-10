import { FC } from 'hono/jsx'
import Input from '../atoms/input'

const LabelInput: FC<{ label: string; type: string; placeholder: string }> = ({ label, type, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <Input type={type} placeholder={placeholder} />
    </div>
  )
}

export default LabelInput