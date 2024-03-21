interface introduce {
  name: string;
  age: number;
}

const Information = (props: introduce) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </div>
  );
};

export default Information;
