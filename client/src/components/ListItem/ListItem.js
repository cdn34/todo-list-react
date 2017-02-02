import React, { PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';
import IconButton from 'material-ui/IconButton';
import ActionClear from 'material-ui/svg-icons/content/clear';

const styles = {
    host: {
        display: 'flex',
        boxShadow: '0 0 1px rgba(0,0,0,0.1), 0 1px 1px rgba(0,0,0,0.25)',
        margin: '10px 0',
        minHeight: '40px',
        padding: '0 5px',
        background: '#f6f6f6',
        boxSizing: 'border-box'
    },
    p: {
        width: '90%',
        margin: 'auto 0'
    }
}

const ListItem = props => {

    const removeTodo = _ => {props.removeTodo(props.parentReference,props.reference)}

    return (
        <div style={styles.host}>
            <p style={styles.p}>{props.text}</p>
            <IconButton tooltip="Delete Todo" onTouchTap={e => removeTodo()}>
                <ActionClear />
            </IconButton>
        </div>
    )
}

ListItem.PropTypes = {
    text: PropTypes.string.isRequired,
    parentReference: PropTypes.string,
    reference: PropTypes.string,
    removeTodo: PropTypes.func.isRequired
    
}

export default Radium(ListItem);