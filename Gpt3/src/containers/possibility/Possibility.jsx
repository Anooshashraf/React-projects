import "./possibility.css";
import  PossibilityImage  from "../../assets/possibility.jpg";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibilty">
      <div className="gpt3__possibility-image ">
        <img src={PossibilityImage} alt="" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early To Get Started!</h4>
        <h1>
          The Possibilities are beyond your imaginations
        </h1>
        <p>
        Yet bed any for travelling assistance indulgence 
        unpleasing. Not thoughts all exercise blessing. 
        Indulgence way everything joy alteration boisterous 
        the attachment.Party we years to order allow asked of.
        </p>
        <h4>Request Early To Get Started!</h4>
      </div>
    </div>
  );
};

export default Possibility;