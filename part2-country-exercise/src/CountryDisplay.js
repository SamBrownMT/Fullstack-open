
const CountryDisplay = ({country}) => {
	return(
		<>
	    <h1>{country.name.official}</h1>
	    <p>capital: {country.capital} </p>
	    <p>area: {country.area}</p>
	    <b>languages:</b>
	    <ul>
	      {Object.values(country.languages).map((language) => {
	        return <li key={language.substr(0,3)}>{language}</li>
	      })}
	    </ul>
	    <img src={country.flags.png} alt='Flag' />
    </>
	)
}

export default CountryDisplay