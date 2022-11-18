export type ProfileType = {
  name: string;
};

const Profile = ({ name }: ProfileType) => {
  return <div>User profile. the name is {name}</div>;
};

export default Profile;
