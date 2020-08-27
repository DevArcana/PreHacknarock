import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './NavBar.css'
import {connect} from 'react-redux'
import {Link, useHistory} from "react-router-dom";
import {setEditable} from '../../store/actions';

export const NavBar = (props) => {
    let history = useHistory();

    const handleClick = () => {
        setEditable(!props.editable);
    }
    const handleRemove = () => {
        history.push('/')
    }

    return (
        <div className="navbar">
            <Link style={{display: "inline"}} to={"/"}>
                {props.view !== "notelist" ?
                    <ArrowBackIosIcon/> : <div/>
                }
            </Link>
            <div>{props.title}</div>
            {props.view === "notelist" ?
                <button onClick={handleClick} style={{float: "right"}}>EDIT</button> :
                <button onClick={handleRemove} style={{float: "right", color: "red"}}>REMOVE</button>
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    editable: state.editable
})

const mapDispatchToProps = {
    setEditable
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

