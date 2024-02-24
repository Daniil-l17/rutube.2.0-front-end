import { useParams } from 'react-router-dom';
import {
  useGetAddProfileQuery,
  useGetChannelIdQuery,
  useGetsubscribeUserMutation,
} from '../../store/apiStoreRtk/api';
import { Button, Image } from '@chakra-ui/react';
import { VideoUserDetail } from '../../components/VideoUser/VideoUserDetail';
import { AppSelector } from '../../store/Type.main';
import { Spinner } from '../../components/spinner/Spinner';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/auth/auth';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
const ChannelUser = () => {
  const { id } = useParams();
  const idUser = AppSelector(state => state.auth.user?.id);
  const { data, isLoading } = useGetChannelIdQuery(+id!);

  const { data: user } = useGetAddProfileQuery(null, { skip: data?.id === id });
  const [subscribe] = useGetsubscribeUserMutation();
  const db = useDispatch();
  const ixExsict = user?.subscriptions.some(el => el.toChannel.id === data?.id);
  const isUser = user?.id === +id!;
  const outLint = data?.isVerified;

  const subs = () => {
    subscribe(data?.id);
  };

  const exit = () => {
    window.confirm('Вы уверены?') && db(actions.logoutFromAccount())
  };

  return (
    <div className=" mt-10 w-full ">
      <div className="bg-[#5d5d7171] h-auto rounded-xl py-10 px-10 w-[100%]">
        <div>
          {isLoading ? (
            <Spinner />
          ) : (
            <div>
              <div className="flex gap-2">
                <Image
                  className="immain !min-w-[200px]"
                  borderRadius="full"
                  boxSize="200px"
                  src={
                    data?.avatarPath.length
                      ? `http://localhost:4200/uploads/avatar/${data?.avatarPath}`
                      : '/images.png'
                  }
                />
                <div className="flex flex-col pl-3 pt-14">
                  <div className="flex items-center ">
                    <h1 className=" uppercase font-bold text-[30px] ">
                      {data?.name.length ? data.name : 'Пользователь'}
                    </h1>
                    {outLint ? (
                      <IoMdCheckmarkCircleOutline className=" cursor-pointer text-[30px] text-[#4848f6] ml-4" />
                    ) : null}
                  </div>
                  <h3 className="mr-4 text-lg">{isUser ? `@${data?.email}` : null}</h3>
                  <p className=" max-w-[1100px]  mt-2">
                    {data?.description.length
                      ? data.description
                      : isUser
                      ? 'Ваше описание аккаунта'
                      : 'Описание пользователя отсутствует'}
                  </p>
                  {data?.id === idUser ? (
                    <Button onClick={exit} className="w-[170px] mt-3" colorScheme="whiteAlpha">
                      Выйти с аккаунта
                    </Button>
                  ) : (
                    <Button onClick={subs} className=" mt-4 w-[180px]" colorScheme="whiteAlpha">
                      {ixExsict ? 'Отписаться' : 'Подписаться'}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#5d5d7171] rounded-xl  py-8 px-10 mt-5  w-full">
        <h1 className=" uppercase text-bold text-[26px]">
          {isUser ? 'Мои Видео' : 'Видео Пользователя'}
        </h1>
        <ul className="flex h-full gap-5 flex-wrap mt-5">
          {isLoading ? (
            <Spinner />
          ) : data?.videos?.filter(el => el.isPublic).length ? (
            data?.videos?.map(el => <VideoUserDetail key={el.id} user={data} el={el} />)
          ) : (
            <div className="flex items-center justify-center w-full">
              <img src="/burger 1.png" alt="" />
              <h1 className=" uppercase font-bold text-[40px]">Нету ни одного видео </h1>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ChannelUser;
