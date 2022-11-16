type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status == "loading") {
    message = "Loading ...fetching data";
  } else if (props.status == "success") {
    message = "Succes fetching data";
  } else {
    message = "Data fetching failed";
  }
  return <div>Status - {message}</div>;
};

export default Status;
