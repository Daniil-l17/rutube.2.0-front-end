import { FC, memo } from 'react';
import { formatNumberTok } from '../../utils/format-number';
import { Image } from '@chakra-ui/react';
import { Ivideo } from '../../types/video.interface';
import { Iuser } from '../../types/user.interface';

interface ele {
  user: Iuser;
  el: Ivideo;
}

export const VideoUserDetail: FC<ele> = memo(({ el, user }) => {
  const image = el.thumbnailPath;
  const num = el.views;
  return (
        <li className=" relative cursor-pointer h-[330px] rounded-2xl bg-[#252837] w-[290px] ">
          <div
            className="rounded-t-2xl h-[180px]"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(http://localhost:4200/uploads/thumbnails/${image})`,
            }}></div>
          <div className="flex flex-col  px-3 py-2 h-[125px] ">
            <h1 className=" text-[#898c9f] truncate w-[230px] font-semibold mt-4 ">{el?.name}</h1>
            <div className=" flex-1  items-end py-4 flex ">
              <p className="text-[#898c9f] font-semibold text-[15px]">{`${formatNumberTok(
                num,
              )} просмотров`}</p>
            </div>
            <span
              style={{ border: '0.2px solid rgb(162, 162, 162)', borderRadius: '30px' }}
              className=" top-[140px] right-[24px] absolute">
              <Image
                className=""
                borderRadius="full"
                boxSize="60px"
                src={
                  user.avatarPath.length
                    ? `http://localhost:4200/uploads/avatar/${user.avatarPath}`
                    : '/images.png'
                }
              />
            </span>
          </div>
        </li>
  );
});
