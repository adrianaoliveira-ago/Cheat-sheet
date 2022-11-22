import { useEffect, useState } from "react";

import CheatSheet from "./CheatSheet";
import Header from "./Header";
import "./App.css";
// import IconCopy from "./assets/IconCopy.png";

const CheatPage = () => {
  // const codeStringReactState = `
  // const MyComponent = () => {
  //     // state has 3 parts: state name, update function and initial state
  //     // const [myStateName, setMyStateFunction] = useState(myInitialState);
  //     const [isLightOn, setlight] = useState(true); // initial state can be anything: string, boolean, array, number...

  //     function onChangeBoolean() {
  //       // setMyStateFunction(newValue) will change the value of myStateName to the new one
  //       if (isBooleanOn === true) {
  //         setlight(false);
  //       } else setlight(true);
  //     }

  //     return (
  //       <div>
  //         // show state value
  //         <h1>{myStateName}</h1>
  //         // use state as a boolean
  //         <img
  //           src={isBooleanOn ? LightBulbOn : LightBulbOff} // ternary operator => boolean ? if true : if false
  //           onClick={onChangeLight}
  //         />
  //       </div>
  //     );
  //   }

  //   `;

  // const codeStringNewComponent = `
  //   // if you need CSS,
  //   import "./MyComponent.css";
  //   // create a new a file MyComponent.jsx with this content
  //   const MyCompoment = () => {
  //     return (
  //       <div>Hello World</div>
  //     )
  //   }

  //   export default MyComponent;
  //   `;

  const fetchUrl =
    "https://cdn.contentful.com/spaces/6m6n676gq222/environments/master/entries?access_token=pzHjF6PJP8oDSJGbJtG4Z0ntu66Q5FoOoQq3NuyUqbQ&content_type=cheat";

  const [cheatList, setCheatList] = useState([]);

  const fetchData = async () => {
    console.log("fetching Data");
    const response = await fetch(fetchUrl);
    const responseJson = await response.json();

    console.log(responseJson.items);
    const newArray = responseJson.items.map((item) => {
      return { title: item.fields.title, code: item.fields.code };
    });
    console.log(newArray);
    setCheatList(newArray);
  };

  useEffect(() => {
    console.log("component loaded");
    fetchData();
  }, []);

  return (
    <div>
      <Header></Header>

      <div className="padding-footer">
        {cheatList.map((item) => {
          return <CheatSheet title={item.title} code={item.code} />;
        })}
      </div>
    </div>
  );
};

export default CheatPage;
