import { Image } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface subs {
  sub: {
    createAt: string;
    updatedAt: string;
    id: number;
    toChannel: {
      avatarPath: string;
      createAt: string;
      description: string;
      email: string;
      id: number;
      isVerified: boolean;
      name: string;
      subscribersCount: number;
      updatedAt: string;
    };
  };
}

export const Sub:FC<subs> = memo(({ sub }) => {
  
  
  return (
    <Link to={`/channel/${sub.toChannel.id}`}>
        <li className='flex gap-3 cursor-pointer w-[190px] hover:bg-[#312c4594] transition duration-100 rounded-2xl py-2 px-2 items-center'>
      <Image
        borderRadius="full"
        boxSize="50px"
        className='immain'
        src={sub?.toChannel.avatarPath?.length ? `http://localhost:4200/uploads/avatar/${sub?.toChannel.avatarPath}` : '/images.png'}
      />
      <h1 className=' text-[#d1d1d1] w-[100px] truncate  font-medium text-[18px]'>{sub.toChannel.name.length ? sub.toChannel.name : 'Пользователь'}</h1>
    </li>
    </Link>
  );
});
