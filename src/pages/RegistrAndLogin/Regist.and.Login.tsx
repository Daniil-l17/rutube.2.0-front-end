import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import {useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from '../../store/auth/auth';

const RegistAndLogin = () => {
  const [infoUser, setInfoUser] = useState({ email: '', password: '' });
  const [authorization, setAuthorization] = useState<'Зарегестрироваться' | 'Войти'>('Войти');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const db = useDispatch();

  const go = () => {
    try {
      if (authorization === 'Войти')
        //@ts-ignore
        db(login(infoUser)).then(() => setInfoUser({ email: '', password: '' }))
      else {
        //@ts-ignore
        db(register(infoUser)).then(() => setInfoUser({ email: '', password: '' }))
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className=" flex items-center justify-center flex-col w-full h-[700px] mt-7">
      <div className="flex gap-4 bg-[#363441] py-5 px-7 w-[600px] h-[600px] rounded-xl justify-center items-center flex-col">
        <Input className=" !w-[300px]" onChange={e => setInfoUser({...infoUser, email: e.target.value})} value={infoUser.email} placeholder="Емаил" />
        <InputGroup className=" !w-[300px]" size="md">
          <Input
            value={infoUser.password}
            onChange={e => setInfoUser({...infoUser, password: e.target.value})} 
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Пороль"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button onClick={go} className="w-[170px] px-5" colorScheme="whiteAlpha">
          {authorization}
        </Button>
        {authorization === 'Войти' ? (
          <h1 onClick={() => setAuthorization('Зарегестрироваться')} className=" mt-3 font-medium text-lg cursor-pointer text-[#666182]">Зарегестрироваться</h1>
        ) : (
          <h1 onClick={() => setAuthorization('Войти')} className=" mt-3 font-medium text-lg cursor-pointer text-[#666182]">Войти в аккаунт</h1>
        )}
      </div>
    </div>
  );
};

export default RegistAndLogin;
