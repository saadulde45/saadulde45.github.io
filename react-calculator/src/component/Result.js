import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
    render() {
        return (
            <div>
                {this.props.result}
            </div>
        );
    }
}

Result.propTypes = {
    result: PropTypes.string
}
export default Result;