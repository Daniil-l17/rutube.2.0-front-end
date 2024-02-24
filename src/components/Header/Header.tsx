import { memo, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { authUser } from '../../store/auth/auth';
import { AppSelector } from '../../store/Type.main';
import { Button, Image } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { useGetAddProfileQuery } from '../../store/apiStoreRtk/api';

export const Header = memo(() => {
  const user = AppSelector(authUser);
  const nav = useNavigate();

  const { data, isLoading, refetch } = useGetAddProfileQuery(null, { skip: !user });
  
  useEffect(() => {
    if(user)
      refetch()
  },[user])

  return (
    <header className="flex justify-between">
      <div className=" rounded-xl flex justify-between bg-[#363441] items-center w-[600px] px-6 py-[11px]">
        <input type="text" className=" border-none" placeholder="найти видео" />
        <IoSearch className=" cursor-pointer" />
      </div>
      {isLoading ? (
        <p>Загрузка....</p>
      ) : !user ? (
        <div>
          <Button
            onClick={() => nav('/authorization')}
            className=" w-[110px]"
            colorScheme="whiteAlpha">
            Войти
          </Button>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <Image
            borderRadius="full"
            boxSize="40px"
            src={data ? `http://localhost:4200/uploads/avatar/${data?.avatarPath}` : 'https://bit.ly/dan-abramov'}
          />
          <h1
            onClick={() => nav(`/channel/${data?.id}`)}
            className=" cursor-pointer text-[20px] font-medium">
            {data ? data.name : 'Пользователь'}
          </h1>
        </div>
      )}
    </header>
  );
});
