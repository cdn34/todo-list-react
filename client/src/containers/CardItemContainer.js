import {connect} from 'react-redux';
import * as actions from '../actions/dashboardActions';
import CardItem from '../components/CardItem/CardItem'; 

function mapStateToProps(state, ownProps) {
  console.log(ownProps.todos);
  console.log(state);
  return {
    reference: ownProps.reference,
    title:  ownProps.title,
    todos:  ownProps.todos.map(id => state.todo[id]),
    removeList: ownProps.removeList,
    removeTodo: ownProps.removeTodo,
  };
}

export default connect (
  mapStateToProps
)(CardItem);