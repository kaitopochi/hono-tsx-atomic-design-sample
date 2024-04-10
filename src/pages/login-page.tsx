import { FC } from 'hono/jsx'
import LoginLayout from '../components/templates/login-layout'
import LoginForm from '../components/organisms/login-form'

const LoginPage: FC = () => {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  )
}

export default LoginPage