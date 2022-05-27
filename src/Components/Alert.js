import React, {useContext} from "react";
import {CSSTransition} from 'react-transition-group'
import { AlertContext } from "../Context/alert/alertContext";


export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)


    
    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div onClick={hide} className={`alert alert-${alert.type || 'warning'}`}>
                <h4 className="alert-heading">Внимание!</h4>
                {alert.text}
                <hr/>
                
            </div>
        </CSSTransition>
    )
}