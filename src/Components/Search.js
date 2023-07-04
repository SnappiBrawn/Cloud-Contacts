import React from 'react';

const Search = (props) =>{
    return(
    <div className='ui  SearchBox form '>
        <div className='ui labeled input wide fields'>
            <label htmlFor="search" className='ui label'><i className='search icon '/></label>
            <input name="search" type="text" id="search_key" placeholder="Search for a Contact" onChange={props.query}/>
        </div>
        <div className='Filters'>
        <p>Filters:</p>
            <div className='ui checkbox'>
                <input type='checkbox' name="mail_filter" id= "mail_filter" onChange={props.query}/><label>Email</label>
            </div>
            <div className='ui checkbox'>
                <input type='checkbox' name="mob_filter"  id= "mob_filter" onChange={props.query}/><label>Mobile Numbers</label>
            </div>
        </div>
    </div>
)}

export default Search;