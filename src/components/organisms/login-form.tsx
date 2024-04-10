import { FC } from 'hono/jsx'
import LabelInput from '../molecules/label-input'
import Button from '../atoms/button'

const LoginForm: FC = () => {
  return (
    <form>
      <LabelInput label="メールアドレス" type="email" placeholder="メールアドレスを入力" />
      <LabelInput label="パスワード" type="password" placeholder="パスワードを入力" />
      <Button label="ログイン" />
    </form>
  )
}

export default LoginForm