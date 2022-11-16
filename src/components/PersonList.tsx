import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((p) => {
        return (
          <h2>
            {p.first} {p.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
