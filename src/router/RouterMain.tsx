import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../components/Layout/Layout';
import { Fragment } from 'react';
import ChannelUser from '../pages/Channel/ChannelUser';
import { AppSelector } from '../store/Type.main';
import { authUser } from '../store/auth/auth';
import RegistAndLogin from '../pages/RegistrAndLogin/Regist.and.Login';

const RouterMain = () => {
  const user = AppSelector(authUser);
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {!user && <Route path="/authorization" element={<RegistAndLogin />} />}
          {user && <Route path="/channel/:id" element={<ChannelUser />} />}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Fragment>
  );
};

export default RouterMain;
