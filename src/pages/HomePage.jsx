import { useNavigate } from 'react-router';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useUsername, useAuth } from '../components/authWrapper/AuthContext';

function HomePage() {
    const navigate = useNavigate();
    const username = useUsername();

    return(
        <div className="min-h-screen flex flex-col bg-white transition-colors">
            <Header />

            <main className="flex-grow flex items-center justify-center">
                <div className="container mx-auto px-4 py-16 text-center">
                    {/* Welcome Text */}
                    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
                        Welcome to <span className="text-blue-600 dark:text-blue-400">DevBlog</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                        Exploring the intersection of AI, robotics, and full-stack development. 
                        Join the conversation and stay updated with the latest tech insights.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {username ? 
                            null
                            :
                            <button 
                                onClick={() => navigate('/login')}
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
                            >
                                Log in
                            </button>
                        }
                        
                        <button 
                            onClick={() => navigate('/posts')}
                            className="px-8 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg shadow-md transition-all"
                        >
                            Posts
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default HomePage;