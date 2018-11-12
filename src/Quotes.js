import React from "react";


const  Quotes = ({ character }) => {
  return (
      <div  className="Quotes">
          <img  src={character.picture.medium}  alt="picture"  />
          <ul>
              <li>
                  Name : {character.name.last}{' '}
                  {character.name.first}
              </li>
              <li> Quote : {character.quote}</li>
          </ul>
      </div>
  );
};

export default Quotes;
