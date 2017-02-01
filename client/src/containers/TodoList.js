import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/dashboardActions';
import DashboardPage from '../components/DashboardPage'; 

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);

//Ways to dispatch props
//1* 
//this.props.dispatch(listData);

//2*
/*function mapDispatchToProps(dispatch) {
  return {
      listData: () => {
          dispatch(listData())
      };
  };
}*/

//3*
/*function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}*/