import PropTypes from 'prop-types';

const Title = ({title}) => {
    return (
        <h1 style={{
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontSize: '25px',
            fontWeight: 500,
            padding: '15px',
            backgroundColor: '#2c3e50',
        }}>{title}</h1>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;
