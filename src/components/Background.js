import { useLocation } from 'react-router';

const Background = () => {
  let location = useLocation().pathname.split('/')[1];

  if (!location) {
    location = 'home';
  }

  return (
    <div className={`background background__${location}`}>
    </div>
  )
}

export default Background;