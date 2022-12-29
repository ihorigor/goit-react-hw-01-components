import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { Title, Text, Numbers } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase()}`;
}

export const Statistics = ({ stats, title = null }) => {
  return (
    <Box m="4" as="section">
      <Title>{title}</Title>

      <Box
        p="4"
        as="ul"
        display="flex"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        {stats.map(({ id, label, percentage }) => (
          <Box
            as="li"
            p="4"
            display="flex"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            flexDirection="column"
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Text>{label}</Text>
            <Numbers>{percentage}%</Numbers>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
