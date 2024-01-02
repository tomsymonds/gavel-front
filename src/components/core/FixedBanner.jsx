import './FixedBanner.css'; // Import your CSS file for styling
import ViewHeading from './ViewHeading';
import { PiGavel } from 'react-icons/pi';

const FixedBanner = () => {
  return (
    <div className="fixed-banner">
      <ViewHeading 
            icon = {PiGavel}
            text = "Gavel"
            iconSize = "2em"
            textSize = "xl"
      />

    </div>
  );
};

export default FixedBanner