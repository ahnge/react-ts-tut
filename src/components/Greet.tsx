type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedin: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      {props.isLoggedin ? (
        <h2>
          Welcome {props.name}, you have {messageCount} unread messages
        </h2>
      ) : (
        <h2>Welcome guest</h2>
      )}
    </div>
  );
};

export default Greet;
