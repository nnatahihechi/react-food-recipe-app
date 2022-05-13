// import Home from './pages/Home'
import Pages from "./pages/Pages";
import Category from "./component /Category";
import{BrowserRouter} from 'react-router-dom';
import Search from "./component /Search";
import styled from 'styled-components';
import {GiKnifeFork} from 'react-icons/gi';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
     <GiKnifeFork />
        <Logo to={'/'}> delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
     </BrowserRouter>
    
    </div>
  );
}
const Logo =styled.div`
text=decoration: none;
font-size: 1.5rem;
font-weight:400;
font-family: 'Lobster Two', cursive;
`;
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-item center;
svg{
  font-size:2rem;
}
`;

export default App;
