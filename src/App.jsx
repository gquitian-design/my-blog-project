import BlogPostsPage from './pages/BlogPostsPage';
import { Route, Routes } from 'react-router-dom'; 
import ContactPage from './pages/ContactPage';
import IndividualPostPage from './pages/IndividualPostPage';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<BlogPostsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        
        <Route path='/post/:postId' element={<IndividualPostPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;