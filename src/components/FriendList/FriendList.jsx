import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { Img, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Box as="section">
      <Box
        as="ul"
        display="flex"
        alignItems="center"
        alignContent="center"
        flexDirection="column"
      >
        {friends.map(({ avatar, name, isOnline = true, id }) => {
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
              key={id}
            >
              <Status>{isOnline}</Status>
              <Img src={avatar} alt="User avatar" />
              <p className="name">{name}</p>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
