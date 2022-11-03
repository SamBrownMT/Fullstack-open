import React from 'react'

const PhonebookDisplay = (props) => {
	return(
		<>
		{props.personsList.map((person) => {
      return( 
      <>
	      <p key={person.id}>
	      {person.name} {person.number}</p>
	      <button onClick={props.handleDelete} 
	      value={person.id}>delete</button>
      </>
      )}
    )}
    </>
	)
}

export default PhonebookDisplay