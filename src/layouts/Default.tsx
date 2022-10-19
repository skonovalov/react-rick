import { Outlet } from 'react-router-dom';
import Content from '../components/Content';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function DefaultLayout() {
  return (
    <div className="App">
      <Header />

      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}

export default DefaultLayout;