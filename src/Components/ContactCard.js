import React from 'react';

const ContactCard = (props) =>{
    return(
        <div className="ui raised card green Card">
            <div className='content'>
                <div className='ui grid two column'>
                    <div className='row'>
                        <div className='column twelve wide'>
                            <div className='header'>
                                {props.content.name}
                            </div>
                            <div className='description'>
                                {props.content.mob}
                            </div>
                            <div className='description'>
                                {props.content.email}
                            </div>
                        </div>
                        <div className='column four wide'>
                            <i id={props.content.id} className='big alternate trash link icon red right floated' onClick={props.del}/>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default ContactCard;