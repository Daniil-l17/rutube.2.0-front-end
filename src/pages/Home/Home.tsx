import { useCallback, useEffect, useState } from 'react';
import { LargePopularVideo } from '../../components/LargePopularVideo/LargePopularVideo';
import { Spinner } from '../../components/spinner/Spinner';
import { usePopularMovieQuery } from '../../store/apiStoreRtk/injest/inject.api';

const Home = () => {
  const { data, isLoading, error } = usePopularMovieQuery(null);
  const random = Math.floor(Math.random() * data?.length!);
  const randomVideo = data?.[random];
  const popular = data?.[0];

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex px-2 justify-between gap-6 mt-10 w-full">
          <LargePopularVideo popular={popular} />
          <div className="bg-[#414040] rounded-2xl w-[400px] h-[250px]">L</div>
        </div>
      )}
    </>
  );
};

export default Home;
