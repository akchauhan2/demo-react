import './App.css';
import { useLocation, useRoutes } from 'react-router-dom';
import router from './router';

const App: React.FC = () => {
  const location = useLocation();
  const element = useRoutes(router, location);

  return element;
};

export default App;
