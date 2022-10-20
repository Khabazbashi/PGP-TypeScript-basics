import { UserData } from "../types";
import "../App.css";

interface IUserNameComponentProps {
  user: UserData;
}

const UserName = ({ user: { name } }: IUserNameComponentProps) => {
  return (
    <p>
      <span className="Heading">Name:</span> {name}
    </p>
  );
};

export default UserName;
