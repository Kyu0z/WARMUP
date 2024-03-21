export interface author {
  name: string;
  date: number;
}

export interface blog {
  title: string;
  content: string;
}

export interface BlogProps {
  Iauthor: author;
  Iblog: blog[];
}

const Blog = (props: BlogProps) => {
  return (
    <div>
      <h2>{`Đây là blog của ${props.Iauthor.name}`}</h2>
      <h3>{`Tên tác giả: ${props.Iauthor.name}`}</h3>
      <p>{`Năm sinh: ${props.Iauthor.date}`}</p>
      <hr />
      <h3>Chi tiết bài blog</h3>
      {props.Iblog.map((_Iblog, index) => (
        <div key={index}>
          <h3>{_Iblog.title}</h3>
          <p>{_Iblog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
