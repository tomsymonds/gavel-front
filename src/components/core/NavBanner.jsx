import './FixedBanner.css'; // Import your CSS file for styling
import ViewHeading from './ViewHeading';
import { HStack } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi';

const NavBanner = () => {


  return (
    <div className="fixed-banner">
      <HStack>
        <ViewHeading 
              icon = {PiGavel}
              text = "Gavel"
              iconSize = "2em"
              textSize = "4xl"
        />
      </HStack>
    </div>
  );
};

export default NavBanner