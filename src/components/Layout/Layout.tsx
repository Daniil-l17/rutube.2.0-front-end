import { FC, PropsWithChildren } from 'react';
import Menu from '../sidebar/menu/Menu';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex py-7">
      <div className="w-[450px] pl-[30px] ">
        <h1 className=" font-bold text-[32px] cursor-pointer text-white ">
          <Link to="/">Rutube 2.0</Link>
        </h1>
        <Menu />
      </div>
      <div className=" pr-10 w-full">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
