import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = ["좌절감으로 배움을 늦추지 마라.", "대충 멋있어 보이는 명언1", "대충 멋있어보이는 명언2"]

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          랜덤 명언 리액트
        </p>
          {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
  }

export default App;
