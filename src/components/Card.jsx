import emailIcon from "../assets/email.svg";
import locationIcon from "../assets/location.svg";
import phoneIcon from "../assets/phone.svg";

const Card = (props) => {
  const { dob, email, location, name, picture, phone } = props;

  

  return (
    <div className="card-and-btn w-96 flex-column items-center justify-center ">
      <div className="card-main border border-black bg-rose-800 rounded-md">
        <div className="profile w-30 flex flex-row my-4">
          <img className="mx-8 rounded-full w-14" src={picture.medium} alt="profilePicture" />
          <p className="flex justify-left items-center ml-8 w-full" > Name: {name.first} {name.last} </p>
        </div>

        <div className="email w-30 flex flex-row my-4">
          <img className="w-8 mx-8" src={emailIcon} alt="emailIcon" />
          <p className="text-center w-full" > Email: {email} </p>
        </div>

        <div className="phone w-30 flex flex-row my-4">
          <img className="w-8 mx-8" src={phoneIcon} alt="phoneIcon" />
          <p className="text-center w-full" > Phone: {phone} </p>
        </div>

        <div className="location w-30 flex flex-row my-4">
          <img className="w-8 mx-8" src={locationIcon} alt="locationIcon" />
          <p className="text-center w-full" > Location: {location.city} </p>
        </div>

        <div className="age w-30 flex flex-row my-4 ml-20">
          <p className=" w-full text-center" > Age: {dob.age} </p>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
