type HorizontalPosition = "left" | "center" | "right";
type VerticlePosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticlePosition}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastProps) => {
  return <div>Position of the toast is - {position}</div>;
};

export default Toast;
