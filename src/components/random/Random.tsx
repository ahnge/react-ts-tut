type NumberType = {
  number: number;
};

type PostiveNumber = NumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = NumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
type ZeroNumber = NumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomProps = PostiveNumber | NegativeNumber | ZeroNumber;

const Random = ({ number, isPositive, isNegative, isZero }: RandomProps) => {
  return (
    <div>
      {number} {isPositive ? "positive" : ""} {isNegative ? "negative" : ""}
      {isZero ? "zero" : ""}
    </div>
  );
};

export default Random;
