import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PageTitle = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [location, title]);


  return null; // This component doesn't render anything
};

export default PageTitle;