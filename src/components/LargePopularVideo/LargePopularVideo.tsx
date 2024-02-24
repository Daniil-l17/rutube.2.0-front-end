import { FC } from 'react';
import { Ivideo } from '../../types/video.interface';
import { Image } from '@chakra-ui/react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import { formatNumberTok } from '../../utils/format-number';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

interface video {
  popular: Ivideo | undefined;
}

dayjs.extend(relativeTime);

export const LargePopularVideo: FC<video> = ({ popular }) => {
  return (
    <div
      style={{
        imageRendering: '-webkit-optimize-contrast',
        backgroundImage: `url(http://localhost:4200/uploads/thumbnails/${popular?.thumbnailPath})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="rounded-2xl cursor-pointer relative py-4 px-5 immain w-[900px] object-cover h-[450px]">
      <div className="bg-[#27272763] py-5 px-7 fixed top-0 left-0 right-0 bottom-0">
        <h1 className="text-[30px] mt-6 w-[500px] ">{popular?.name}</h1>
        <div className=" mt-16 flex gap-3 items-center">
          <Image
            borderRadius="full"
            boxSize="90px"
            src={
              popular
                ? `http://localhost:4200/uploads/avatar/${popular?.user?.avatarPath}`
                : 'https://bit.ly/dan-abramov'
            }
          />
          <div className="mt-2">
            <Link to={`/channel/${popular?.user?.id}`}>
              {' '}
              <div className="flex gap-2">
                <h1 className="text-[19px]">{popular?.user?.name}</h1>
                <IoMdCheckmarkCircleOutline className=" cursor-pointer text-[23px] text-[#4848f6]" />
              </div>
            </Link>
            <span>{formatNumberTok(popular?.views)}</span>
            <p className=" bg-[#0c0c0cad] rounded-lg py-1 px-2 absolute bottom-6 right-3">
              {dayjs(new Date(popular?.createdAt!)).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
