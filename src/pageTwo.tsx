import { useNavigate } from 'react-router-dom';



export default function PageTwo() {
  const backHome = useNavigate();
  return (
    <header>
      <h1>Create recipe page</h1>
      <button id="page" onClick={() => backHome('/')}>Back Home</button>
    </header>
  );
}
