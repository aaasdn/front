import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
//import KakaoMap from './Components/KakaoMap/KakaoMap';
import Login from './Components/User/Login/Login';
import NaverLoginHandler from './Components/User/Login/NaverLoginHandler';
import KakaoLoginHandler from './Components/User/Login/KakaoLoginHandler';
import Header from './Components/Header/Header';
import styles from './App.module.scss';
import Recipes from './Components/Recipe/Recipes';
import Kakao from './Components/Kakao/Kakao';
import Join from './Components/User/Join/Join';
import { AuthContextProvider } from './utils/AuthContext';
import Life from './Components/Life/Life';

function App() {
  // return (
  //   <div className='App'>
  //     <KakaoMap
  //       searchWord={'약국'}
  //       address={'서울특별시 마포구 백범로 23'}
  //     />
  //   </div>
  // );
  return (
    <AuthContextProvider>
      <div className='App'>
        <Header />
        <div
          className={styles['wrap-content']}
          style={{ display: 'flex' }}
        >
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/user/login'
              element={<Login />}
            />
            <Route
              path='/user/join'
              element={<Join />}
            />
            <Route
              path='/oauth/redirected/kakao'
              element={<KakaoLoginHandler />}
            />
            <Route
              path='/oauth/redirected/naver'
              element={<NaverLoginHandler />}
            />
            <Route
              path='/kakao'
              element={<Kakao />}
            />
            <Route
              path='/Life'
              element={<Life />}
            />
            <Route
              path='/recipes'
              element={<Recipes />}
            />
          </Routes>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
