import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Tips from './Pages/Tips';
import ProfileRecipe from './Pages/ProfileRecipe';
import Utensils from './Pages/Utensils';
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect } from 'react';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB70s_Epzs2lfYhR_EHQ77mVDVwGVKQvM0",
  authDomain: "caftyfoods.firebaseapp.com",
  databaseURL: "https://caftyfoods-default-rtdb.firebaseio.com",
  projectId: "caftyfoods",
  storageBucket: "caftyfoods.appspot.com",
  messagingSenderId: "43714327646",
  appId: "1:43714327646:web:e726d45e4970182a28b0cf",
  measurementId: "G-5G9ZD4EPC1"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const analytics = getAnalytics(app);

const dbRef = ref(getDatabase());

const fetchData = async () => {
  return await get(child(dbRef, `/`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

function App() {
  const [user, setUser] = React.useState('Guest')
  const [data, setData] = React.useState([])
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)


  useEffect(() => {
    fetchData()
      .then(res => {
        setData(res)
      })
  }, [])


  return (
    <>
      <Router>
        <div className="App">
          <Navbar user={user} setU={setUser} isAuth={isAuthenticated} setAuth={setIsAuthenticated} />
          <Routes>
            <Route exact path='/' element={<Home DATA={data} isAuthenticated={isAuthenticated} user={user} />} />
            <Route path='/tips' element={<Tips />} />
            <Route path='/Utensils' element={<Utensils />} />
            <Route path='/login' element={<Login setU={setUser} setAuth={setIsAuthenticated} />} />
            <Route path='/register' element={<Register setU={setUser} setAuth={setIsAuthenticated} />} />
            <Route path='/myRecipe' element={<ProfileRecipe DATA={data} user={user} />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );


}
export default App;
