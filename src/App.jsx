import BlogPostsPage from './pages/BlogPostsPage';
import { Route, Routes } from 'react-router-dom'; 
import ContactPage from './pages/ContactPage';
import IndividualPostPage from './pages/IndividualPostPage';
import { ThemeProvider } from './components/ThemeContext';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/posts' element={<BlogPostsPage />} />
        <Route path='/post/:postId' element={<IndividualPostPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;