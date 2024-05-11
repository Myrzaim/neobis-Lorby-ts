import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthPage } from './pages/authPage/authPage'
import EmailSendPage from './pages/emailSendPage/emailSendPage';
import GreetPage from './pages/greetPage/greetPage';
import RegisterPage from './pages/registerPage/registerPage';

function App() {
  return (
    <div className="App">
      {/* <GreetPage title={"Добро пожаловать"} /> */}
     
      <Routes>
      <Route path="/" element={<AuthPage />} />
      {/* <AuthPage /> */}
      <Route path="/register" element={<RegisterPage />} />
        {/* <RegisterPage /> */}
        {/* <Route path="/emailSend" element={<EmailSendPage />} /> */}
        <Route path="/greet" element={<GreetPage title={"Добро пожаловать"}/>} />
        </Routes>
    </div>
  );
}

export default App;
