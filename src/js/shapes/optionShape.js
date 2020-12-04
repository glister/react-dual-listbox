import PropTypes from 'prop-types';

export default PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,

    // Optional properties
    disabled: PropTypes.bool,
    title: PropTypes.string,
});
