import React from 'react';

const Repo = props => (
  <p>  
    <a href={props.url} rel="noopener noreferrer" target="_BLANK">{props.name}</a>
    <span>{props.description}</span><br/>
      <span>{props.language}</span><br/>
      <span>{props.star}</span>

  </p>
);

export default Repo;