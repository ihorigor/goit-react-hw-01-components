import { Box } from 'components/Box/Box';
import { Img, Status } from '../FriendList.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline = true }) => {
  return (
    <Box
      pt="4"
      as="li"
      position="relative"
      display="flex"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      width="100px"
    >
      <Status>{isOnline}</Status>
      <Img src={avatar} alt="User avatar" />
      <p className="name">{name}</p>
    </Box>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
