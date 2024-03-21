import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
// import Information from "@src/components/Information";
// import Counter from "@src/components/Counter";
// import Todolist from "@src/components/Todolist";
// import Person from "@src/components/Person";
import Blog, { author, blog } from "@src/components/Blog";

function App() {
  const currentUser: author = {
    name: "Kyu",
    date: 2001,
  };

  const currentBlog: blog[] = [
    {
      title: "Cách làm một ứng dụng React",
      content: "Hướng dẫn từ A đến Z về cách làm một ứng dụng React.",
    },
    {
      title: "Top 10 mẹo sử dụng TypeScript",
      content: "Những mẹo quan trọng khi làm việc với TypeScript.",
    },
  ];

  return (
    <Provider store={store}>
      {/* <Person className="person" /> */}
      {/* <Todolist /> */}
      {/* <Counter /> */}
      {/* <Information name="Khai Duy" age={23} /> */}
      <Blog Iauthor={currentUser} Iblog={currentBlog} />
    </Provider>
  );
}

export default App;
