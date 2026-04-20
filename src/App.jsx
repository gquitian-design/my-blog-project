import BlogPostsPage from './pages/BlogPostsPage';
import { Route, Routes } from 'react-router-dom'; 
import ContactPage from './pages/ContactPage';
import IndividualPostPage from './pages/IndividualPostPage';
import { ThemeProvider } from './components/ThemeContext';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import { AuthProvider } from "./components/authWrapper/AuthProvider";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/posts' element={<BlogPostsPage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/post/:postId' element={<IndividualPostPage />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;