import React, {PropTypes} from 'react';
import Radium, { StyleRoot } from 'radium';
import IconButton from 'material-ui/IconButton';
import ActionClear from 'material-ui/svg-icons/content/clear';
import ListItem from '../ListItem/ListItem';

const styles = {
    host: {
        display: "block",
        background: "white",
        boxShadow: "0 0 1px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.25)",
        minWidth: "250px",
        height: "300px",
        margin: "15px",
        padding: "10px",
        overflowX: "hidden"
    },
    h2 : {
        borderBottom: '1px solid #dddddd',
        textOverflow: 'ellipsis',
        maxWidth: '300px',
        overflow: 'hidden',
        width:'85%'
    },
    topBar : {
        display:'-webkit-box',
        display:'-ms-flexbox',
        display:'flex',
        width:'100%'
    }
}
const CardItem = props => {
    const todos = props.todos || [];
    const removeList = _ => {props.removeList(props.reference)}

    return (
        <div style={styles.host}>
            <div style={styles.topBar}>
                <h2 style={styles.h2}>{props.title}</h2>
                    <IconButton tooltip="Delete List" onTouchTap={e => removeList()}>
                        <ActionClear />
                    </IconButton>
            </div>
            {todos.map(item => <ListItem key={item._id} text={item.text} parentReference={props.reference} reference={item._id} removeTodo={props.removeTodo}/>)}
        </div>
    );
};

CardItem.propTypes = {
    reference: PropTypes.string,
    title: PropTypes.string.isRequired,
    todos: PropTypes.array,
    removeList: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
};

export default Radium(CardItem);