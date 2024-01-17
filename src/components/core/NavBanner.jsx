import './FixedBanner.css'; // Import your CSS file for styling
import ViewHeading from './ViewHeading';
import { Flex, Spacer } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi';
import UserBadge from '../users/UserBadge';

const NavBanner = () => {


  return (
    <div className="fixed-banner">
      <Flex
        minWidth='max-content' alignItems='center' gap='2' pl = '20px' pr = '30px'
      >
        <ViewHeading 
              icon = {PiGavel}
              text = "Gavel"
              iconSize = "2em"
              textSize = "4xl"
        />
        <Spacer />
        <UserBadge />
      </Flex>
    </div>
  );
};

export default NavBanner