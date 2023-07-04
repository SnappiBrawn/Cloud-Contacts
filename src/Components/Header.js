import React from 'react';

const Header = (props) =>{
    return(
        <div className="ui menu">
            <div className='ui centered'>
                {/* <img src="../../public/favicon.png" alt="site-icon"/> */}
                <i className=' purple cloudversify icon' style={{fontSize: "4rem", paddingTop: "20px", paddingLeft:"10px"}}/>
            </div>
            <div className='ui container center'>
                <h1>Cloud Contacts</h1>
            </div>
            <div className='options'>
                <button className='ui button blue right floated' onClick={props.import}>Import</button>
                <button className='ui button yellow right floated' onClick={props.export}>Export</button>
            </div>
        </div>
    );
}

export default Header;