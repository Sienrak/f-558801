
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600 mb-6">Start building your amazing project here!</p>
        <div className="space-y-4">
          <div>
            <Link 
              to="/clarifai" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              View Clarifai Content
            </Link>
          </div>
          <div>
            <Link 
              to="/clarifai-app" 
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              View Clarifai App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
