import React, { PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CardItem from './CardItem/CardItem';

const styles = {
    host: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '50px 0 100px 0'
    },
    actionArea: {
        display:'flex',
        minHeight:' 150px',
        width:' 100%',
        background:' #fff',
        position:' fixed',
        bottom:0,
        zIndex:1
    },
    action: {
        width:'100%',
        padding:'5px 10px',
    },
    inline: {
        display:'flex',
        width:'100%',
        alignItems: 'flex-end'
    },
    paperInput: {
        width:'100%',
        margin:'0 5px',
    },
    addList: {
        background: '#448AFF',
        color:' white',
    },
    addTodo : {
        background: '#4CAF50',
        color: 'white',
    }
}


class DashboardPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectField: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.addList = this.addList.bind(this);
        this.removeList = this.removeList.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    handleChange (event, index, item) { 
        this.setState({selectField: item});
    }
    addList () {
        this.props.actions.addList(document.querySelector("#listText").value);
    }
    removeList (listId) {
        this.props.actions.removeList(listId);
    } 
    addTodo () {
        this.props.actions.addTodo(this.state.selectField._id, {"text": document.querySelector("#todoText").value});
    }
    removeTodo (listId, todoId) {
        console.log(listId, todoId);
        this.props.actions.removeTodo(listId, todoId);
    }  

    render(){
        return (
            <StyleRoot>
                <div style={styles.host}>
                    {this.props.dashboard.lists.map(item => <CardItem key={item._id} reference={item._id} title={item.title} todos={item.todos} removeList={this.removeList} removeTodo={this.removeTodo} />)}
                    <div style={styles.actionArea}>
                        <div style={styles.action}>
                            <div style={styles.inline}>
                                <TextField fullWidth={true} style={styles.paperInput} hintText="Add List" id="listText"/>
                                <RaisedButton
                                    backgroundColor="#448AFF"
                                    labelColor="#fff"
                                    label="Add"
                                    labelPosition="before"
                                    style={styles.addList}
                                    containerElement="label"
                                    onTouchTap={this.addList}
                                />
                            </div>
                        </div>
                        <div style={styles.action}>
                            <SelectField
                                fullWidth={true}
                                floatingLabelText="Available Lists"
                                value={this.state.selectField}
                                onChange={this.handleChange}
                            >
                            {this.props.dashboard.lists.map(item => <MenuItem key={item._id} value={item} primaryText={item.title} />)}
                            </SelectField>
                            <div style={styles.inline}>
                                <TextField fullWidth={true} style={styles.paperInput} hintText="Add Todo" id="todoText"/>
                                <RaisedButton
                                    backgroundColor="#4CAF50"
                                    labelColor="#fff"
                                    label="Add"
                                    labelPosition="before"
                                    style={styles.addTodo}
                                    containerElement="label"
                                    onTouchTap={this.addTodo}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </StyleRoot>
        );
    }
}

DashboardPage.propTypes = {
  actions: PropTypes.object.isRequired,
  dashboard: PropTypes.object.isRequired
};

export default  Radium(DashboardPage);