
const Card = ({dob, email, gender, location, name, picture}) => {
        
    
    

    return ( 
        <div className="container flex flex-column items-center">
            <h2>Card here</h2> 
            <br />
            <p> {dob.age} </p>
            <p> {name.first} </p>
            <p> {email} </p>
        </div>
     );
}

export default Card;