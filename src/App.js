import logo from './logo.svg';
import {Header, UserBlock} from "./components";
import './App.css';
import styles from './app.module.css'

const getUserFromServer = () => ({
    id:'11100',
    name:'Ivan',
    age:23,
    email:'example@mail.ru',
    phone:'+79777142246'
})

const {name, age, email, phone} = getUserFromServer()
function App() {
  return (
      <div className={styles.app}>
      <Header name={name}/>
      <hr/>
       <UserBlock name={name} age={age} email={email} phone={phone}/>
      </div>
  );
}

export default App;
