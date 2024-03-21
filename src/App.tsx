// import { Provider } from "react-redux";
import { createContext, useState } from "react";
import "./App.css";
import Shoe from "./components/Shoe";
// import { store } from "./store";
// import Information from "@src/components/Information";
// import Counter from "@src/components/Counter";
// import Todolist from "@src/components/Todolist";
// import Person from "@src/components/Person";
// import Blog, { author, blog } from "@src/components/Blog";

interface IShoeData {
  shoeName: string;
  shoeAmount: number;
}

export const ShoeContext = createContext<IShoeData | undefined>(undefined);

function App() {
  // const currentUser: author = {
  //   name: "Kyu",
  //   date: 2001,
  // };

  // const currentBlog: blog[] = [
  //   {
  //     title: "Cách làm một ứng dụng React",
  //     content: "Hướng dẫn từ A đến Z về cách làm một ứng dụng React.",
  //   },
  //   {
  //     title: "Top 10 mẹo sử dụng TypeScript",
  //     content: "Những mẹo quan trọng khi làm việc với TypeScript.",
  //   },
  // ];

  // Context
  const [shoeData, setShoeData] = useState<IShoeData>({
    shoeName: "",
    shoeAmount: 0,
  });
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setShoeData((prevShoeData) => ({
      ...prevShoeData,
      [name]: value,
    }));
  };

  return (
    // <Provider store={store}>
    //   {/* <Person className="person" /> */}
    //   {/* <Todolist /> */}
    //   {/* <Counter /> */}
    //   {/* <Information name="Khai Duy" age={23} /> */}
    //   {/* <Blog Iauthor={currentUser} Iblog={currentBlog} /> */}

    // </Provider>

    // ******* Context **********
    <>
      <ShoeContext.Provider value={shoeData}>
        <h2>Shoe Management</h2>
        <label htmlFor="shoeName">Shoe Name</label>
        <input
          type="text"
          name="shoeName"
          value={shoeData.shoeName}
          onChange={handleInputChange}
        ></input>
        <br />
        <label htmlFor="shoeName">Shoe Amount</label>
        <input
          type="number"
          name="shoeAmount"
          value={shoeData.shoeAmount}
          onChange={handleInputChange}
        ></input>
        <button onClick={() => console.log("Updated shoe data:", shoeData)}>
          Save
        </button>
        <br />
        <Shoe />
      </ShoeContext.Provider>
    </>
  );
}

export default App;
