import { useState } from 'react';
import Button from '../components/ui/Button';
import Form from '../components/ui/Form';
import Input from '../components/ui/Input';
import '../assets/css/login.css';

function LoginLayout() {
  console.log('render')
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const onSubmit = () => {
    console.log('submit')
  };

  return (
    <div className="flex justify-center items-center shadow-lg login">
      <Form className="flex-col p-3 bg-white rounded-md w-80">
        <p className="text-xl font-medium mb-4">
          Авторизация
        </p>

        <Input
          className="mb-2.5"
          label="Логин"
          value={login}
          onChange={setLogin}
        />
        <Input
          className="mb-2.5"
          label="Пароль"
          value={password}
          onChange={setPassword}
        />

        <Button
          type="submit"
          onClick={onSubmit}
        >
          Логин
        </Button>
      </Form>
    </div>
  );
}

export default LoginLayout;