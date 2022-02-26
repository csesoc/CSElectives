
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoToTop = () => {
  const routePath = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routePath]);

  return null;
};

export default GoToTop;
