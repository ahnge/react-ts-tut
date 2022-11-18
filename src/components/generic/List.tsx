type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h1>LIst of items</h1>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;
