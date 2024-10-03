import '../Components/Home.css'; // Import Home.css to reuse styles
import NavBar from '../Components/NavBar';

const NotFound = () => {
  return (
    <div className="NotFoundMain  h-1/3 flex flex-col overflow-hidden bg-white ">
      <NavBar />
      <div className="flex-grow flex mt-60 items-center justify-center">
        
        <div className="text-center p-4">
          <h1 className="name text-gray-900  text-6xl">
            404
          </h1>
          <p className="name text-gray-900  text-3xl mt-4">
            Page Not Found
          </p>
          <p className="namedesc text-gray-700  mt-4 opacity-70">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <a
            href="/"
            className="text-xl mt-6 inline-block px-6 py-3 self-center hover:text-slate-950  text-slate-600 font-semibold rounded-md    transition duration-300"
          >
            Go Back Home <span className='self-center '>→</span>         
            </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
