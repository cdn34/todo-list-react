import React, {PropTypes} from 'react';

const DashboardPage = props => {
    return (
        <div>hello</div>
    );
};

DashboardPage.propTypes = {
  actions: PropTypes.object.isRequired,
  dashboard: PropTypes.object.isRequired
};

export default DashboardPage;