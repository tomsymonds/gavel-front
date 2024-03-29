import PropTypes from 'prop-types'
import './FixedBanner.css'; // Import your CSS file for styling
import ViewHeading from './ViewHeading';
import { Flex, Spacer } from '@chakra-ui/react'
import { PiGavel, PiUploadSimple  } from 'react-icons/pi';
import UserBadge from '../users/UserBadge';
import useView from "src/library/useView"

const NavBanner = (props) => {

  const { loggedIn } = props
  const viewHistory = useView()  

  const handleUploadClick = () => {
    viewHistory.replaceHistoryWith({
      name: "uploader", 
      itemTitle: "Upload Data",
      scroll: 0
    })
  }

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
              iconColor = "white"
        />
        {loggedIn && 
          <>
          <Spacer />
          <PiUploadSimple 
            size = '2em' 
            onClick = {() => handleUploadClick()} 
            _hover={{cursor: 'pointer'}}
          />
          <Spacer />
          <UserBadge />
          </>
        }
      </Flex>
    </div>
  );
};

NavBanner.propTypes = {
  //True if the user is logged in
  loggedIn: PropTypes.bool
}

export default NavBanner