import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage'
import ArticleList from './Pages/ArticleList'
import ArticlesPage from './Pages/ArticlesPage'

function App() {
  return (
    <Routes>
        <Route  exact path="/" element={<HomePage/>}/>
        <Route  exact path="/article" element={<ArticlesPage/>}/>
        <Route  exact path="/article-list" element={<ArticleList/>}/>
        <Route  exact path="/about" element={<AboutPage/>}/>
    </Routes>
  );
}

export default App;

