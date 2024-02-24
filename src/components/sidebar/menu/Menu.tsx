import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { AppSelector } from '../../../store/Type.main';
import { FaAngleRight } from 'react-icons/fa';
import { useGetAddProfileQuery } from '../../../store/apiStoreRtk/api';
import { Sub } from '../../sub/Sub';
const Menu = () => {
  const authID = AppSelector(state => state?.auth?.user?.id);
  const { data } = useGetAddProfileQuery(null, { skip: !authID });
  const sub = data?.subscriptions?.map(el => el);

  
  return (
    <div className="flex flex-col mt-7">
      <h4 className=" text-[17px] font-semibold mb-5 text-[#868697]">Меню</h4>
      <ul className="flex flex-col gap-3">
        <NavLink
          className="flex w-[190px] hover:bg-[#312c4594] transition duration-100 py-2 px-2 rounded-2xl hover:text-white text-[#666182] items-center"
          to="/">
          {({ isActive }) => (
            <li className="flex gap-4 items-center">
              <span
                className={`flex justify-center py-3 px-3 rounded-xl ${
                  isActive ? 'bg-[#a76e50] transition duration-150 text-white' : 'bg-[#363440] '
                }`}>
                {<HiHome />}
              </span>
              <h1 className={`font-semibold ${isActive && 'text-white'} `}>{'Главная'}</h1>
            </li>
          )}
        </NavLink>
        <NavLink
          className="flex w-[190px] hover:bg-[#312c4594] transition duration-100 rounded-2xl py-2 px-2 hover:text-white text-[#666182] items-center"
          to={'ss'}>
          {({ isActive }) => (
            <li className="flex gap-4 items-center">
              <span
                className={`flex justify-center py-3 px-3 rounded-xl ${
                  isActive ? 'bg-[#a76e50] transition duration-150 text-white' : 'bg-[#363440] '
                }`}>
                {<HiChartBar />}
              </span>
              <h1 className={`font-semibold ${isActive && 'text-white'} `}>{'Тренды'}</h1>
            </li>
          )}
        </NavLink>
        <NavLink
          className="flex w-[190px] hover:bg-[#312c4594] transition duration-100 rounded-2xl py-2 px-2 hover:text-white text-[#666182] items-center"
          to={'cscs'}>
          {({ isActive }) => (
            <li className="flex gap-4 items-center">
              <span
                className={`flex justify-center py-3 px-3 rounded-xl ${
                  isActive ? 'bg-[#a76e50] transition duration-150 text-white' : 'bg-[#363440] '
                }`}>
                {<HiCollection />}
              </span>
              <h1 className={`font-semibold ${isActive && 'text-white'} `}>{'Мои подписки'}</h1>
            </li>
          )}
        </NavLink>
      </ul>
      <div className="bg-[#96969646] mt-7 rounded-xl w-[210px] h-[1px]"></div>
      <ul className="">
        {authID ? (
          <>
            <div className="flex gap-2 cursor-pointer  mb-3  pt-5 pb-2 items-center">
              <h1 className="font-semibold text-[20px]">Вы</h1>
              <FaAngleRight className="text-[22px]" />
            </div>
            <NavLink
              className="flex w-[190px] rounded-2xl hover:bg-[#312c4594] transition duration-100 py-2 px-2 hover:text-white text-[#666182] items-center"
              to={`/channel/${authID}`}>
              {({ isActive }) => (
                <li className="flex gap-4 items-center">
                  <span
                    className={`flex justify-center py-3 px-3 rounded-xl ${
                      isActive ? 'bg-[#a76e50] transition duration-150 text-white' : 'bg-[#363440] '
                    }`}>
                    {<HiStar />}
                  </span>
                  <h1 className={`font-semibold ${isActive && 'text-white'} `}>{'Мой Канал'}</h1>
                </li>
              )}
            </NavLink>
            <div className="mt-4 flex cursor-pointer items-center gap-2">
              <h1 className="font-semibold text-[#868697] text-[18px]">Мои подписки</h1>
            </div>
            <ul className="flex overflow-auto h-[320px] w-[230px] flex-col gap-4 mt-3">
              {sub?.map(el => (
                <Sub key={el.id} sub={el} />
              ))}
            </ul>
          </>
        ) : (
          <div>
            <p className=" text-[#666182] font-medium w-[240px] mt-3">
              Вы сможете ставить отметки "Нравится", писать комментарии и подписываться на каналы
              только после авторизации
            </p>
          </div>
        )}
        <div className="bg-[#96969646] mt-7 rounded-xl w-[210px] h-[1px]"></div>
      </ul>
      <p className="text-[15px] font-semibold mt-4  text-[#666182]">
        © 2024 RUTUBE 2.0 by <br /> Daniil Lukyanov
      </p>
    </div>
  );
};

export default Menu;
