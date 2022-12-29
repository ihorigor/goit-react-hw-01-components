import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { Img, UserName, Text, Numbers } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <Box m="4" as="section" boxShadow="boxShadow" borderRadius="md">
    <Box
      p="5"
      bg="white"
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
    >
      <Img src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </Box>

    <Box
      bg="secondary"
      color="white"
      p="5"
      as="ul"
      display="flex"
      alignItems="center"
      alignContent="center"
      justifyContent="space-evenly"
    >
      <Box
        as="li"
        display="flex"
        alignItems="center"
        alignContent="center"
        flexDirection="column"
      >
        <Text>Followers</Text>
        <Numbers>{followers}</Numbers>
      </Box>
      <Box
        as="li"
        display="flex"
        alignItems="center"
        alignContent="center"
        flexDirection="column"
      >
        <Text>Views</Text>
        <Numbers>{views}</Numbers>
      </Box>
      <Box
        as="li"
        display="flex"
        alignItems="center"
        alignContent="center"
        flexDirection="column"
      >
        <Text>Likes</Text>
        <Numbers>{likes}</Numbers>
      </Box>
    </Box>
  </Box>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
