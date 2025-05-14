// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Counter from '../src/page/Counter.jsx';
import ProfileCard from '../src/page/ProfileCard.jsx';
import DarkModeToggle from './state/DarkModeToggle.jsx';

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Props vs State 예제</h1>
        <Counter title = "클릭 카운터" />
      </div>
      <div>
        <h1>프로필 카드 예제</h1>
        <ProfileCard />
      </div>
      <div>
        <h1>inputform 예제</h1>
        <inputForm />
      </div>
      <div>
        <h1>다크모드 예제</h1>
        <DarkModeToggle />
      </div>



      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

