import "./tech.css";
import Bootstrap from "../../../assets/bootstrap.png";
import Docker from "../../../assets/docker.png";
import Firebase from "../../../assets/firebase.png";
import Mongo from "../../../assets/mongo.webp";
import Nodejs from "../../../assets/nodejs.png";
import Oracle from "../../../assets/oracle.webp";
import Postgres from "../../../assets/postgres.png";
import Powerbi from "../../../assets/powerbi.png";
import Sql from "../../../assets/sqlserver.jpg";
import Tailwind from "../../../assets/tailwind.png";
import JS from "../../../assets/js.png";
import Redux from "../../../assets/redux.png";
import ReactJ from "../../../assets/reactjs.png";

const Tech = () => {
  return (
    <div className="orbit">
      <div className="flex flex-col m-8">
        <p className="text-zinc-500 font-semibold">Currently using and</p>
        <p className="text-xl font-bold">Mastering</p>
      </div>
      <ul className="orbit-wrap">
        <li className="orbit-center">
          <img className="orbit-center-icon" src={ReactJ} alt="ReactJ" />
        </li>
        <li>
          <ul className="ring-1">
            <li>
              <img className="orbit-icon-1" src={Docker} alt="Docker" />
            </li>
            <li>
              <img className="orbit-icon-1" src={Firebase} alt="Firebase" />
            </li>
            <li>
              <img className="orbit-icon-1" src={Mongo} alt="Mongo" />
            </li>
            <li>
              <img className="orbit-icon-1" src={Powerbi} alt="Powerbi" />
            </li>
            <li>
              <img className="orbit-icon-1" src={Sql} alt="Sql" />
            </li>
          </ul>
        </li>
        <li>
          <ul className="ring-2">
            <li>
              <img className="orbit-icon-2" src={Oracle} alt="Oracle" />
            </li>
            <li>
              <img className="orbit-icon-2" src={Postgres} alt="Postgres" />
            </li>
            <li>
              <img className="orbit-icon-2" src={Nodejs} alt="Nodejs" />
            </li>
            <li>
              <img className="orbit-icon-2" src={Bootstrap} alt="Bootstrap" />
            </li>
          </ul>
        </li>
        <li>
          <ul className="ring-3">
            <li>
              <img className="orbit-icon-3" src={Tailwind} alt="Tailwind" />
            </li>

            <li>
              <img className="orbit-icon-3" src={JS} alt="JS" />
            </li>
            <li>
              <img className="orbit-icon-3" src={Redux} alt="Redux" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Tech;
