import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <Message react= 'Message' name= 'Alex Sramko !'/>
       
    </div>
  );
}

function Message(props) {
  return ( 
    <div class='contener'>
      <h1 class="contener__text">Привет я <span style={{ color: 'red' }}>{props.name}</span></h1>
      <p class='contener__dz'>Это DZ1</p>
      <ul>
        <li class='contener__list'><span>&#9989;</span>Развернуть новый проект с использованием create-react-app.</li>
        <li class='contener__list'><span>&#9989;</span>Создать компонент Message, отображающий переданный ему props текст.</li>
        <li class='contener__list'><span>&#9989;</span>Стилизовать компоненты через css (при желании можно использовать less или sass).</li>
        <li class='contener__list'><span>&#9989;</span>Дополнительное задание: Установить расширение React Devtools.</li>
      </ul>
    </div>
   );
}


export default App;
