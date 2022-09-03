import React from 'react';
import { MdOutlineCancel } from "react-icons/md";
import './PullPost.css'

function PullOption(props) {
    return (
        <div className='container pull-option-body d-flex justify-content-between'>
            <div class="form-check pull-topic">
                <input className="form-check-input pull-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                <label className="form-check-label " for="flexCheckIndeterminate">
                    <span className='added-user'> Added by {props.user}</span> <br />
                    {props.sports}
                </label>
            </div>
            <MdOutlineCancel  className='mt-3'/>
        </div>
    )
}

export default PullOption