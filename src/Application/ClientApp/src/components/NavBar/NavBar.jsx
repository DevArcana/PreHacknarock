import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './NavBar.css'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {setEditable} from '../../store/actions';
export const NavBar = (props) => {

    const handleClick = () => {
        props.setEditable(!props.editable);
    }

    return (
        <div class="navbar">
            <Link style={{display: "inline"}} to={props.previousPage}>
                <ArrowBackIosIcon to={props.previousPage}></ArrowBackIosIcon>
            </Link>
            <div>{props.title}</div>
            <button onClick={handleClick} style={{float: "right"}}>EDIT</button>
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
