import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const Notes = ({notes, onRemove}) => (
    <TransitionGroup component='ul' className='list-group list-group-flush'>
        

        {notes.map(note => {
           return (
            <CSSTransition
            key={note.id}
            timeout={800}
            classNames={'note'}
            >
                <li className='list-group-item note'>

                        <div>
                            <strong>{note.title}</strong>
                            <small>{note.date}</small>
                        </div>

                        <div>
                            <button 
                                type="button"
                                className="btn btn-secondary btn-sm "
                                aria-label="Edit"
                                
                            >
                                Edit
                            </button>

                            <button 
                                type="button" 
                                className="btn-close btn-sm " 
                                aria-label="Delete"
                                onClick={() => onRemove(note.id) }
                            >
                            </button>
                        </div>
               
                </li>
            </CSSTransition>
            )
        })}
        
        
    </TransitionGroup>
)