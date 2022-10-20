import { UserData } from "../types";

interface IUserNameComponentProps {
  user: UserData;
}

const UserName = ({ user: { name } }: IUserNameComponentProps) => {
  return <p>{name}</p>;
};

export default UserName;
