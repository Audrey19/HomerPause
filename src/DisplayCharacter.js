import  React  from  'react';

const  DisplayCharacter = ({ simpson }) => {
    return (
        <div  className="DisplayCharacter">
            <img  src={simpson.image}  alt="picture"  />
            <ul>
                <li>
                    Name : {simpson.character}
                </li>
                <li>
                    Quote : {simpson.quote}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayCharacter;
