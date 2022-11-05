import CheatSheet from "./CheatSheet";
import Header from "./Header";

const CheatPage = () => {
  const codeStringOnClick = `
    const functionToBeInvoked = () => {
        // this will be executed when img is clicked
    }
    // or
    function functionToBeInvoked() {
        // this will be executed when img is clicked
    }

    return(
        ...
        <img onClick={functionToBeInvoked} />
        ...
    )
  `;
  const codeStringReactState = `
  const MyComponent = () => {
      // state has 3 parts: state name, update function and initial state
      // const [myStateName, setMyStateFunction] = useState(myInitialState);
      const [isLightOn, setlight] = useState(true); // initial state can be anything: string, boolean, array, number...

      function onChangeBoolean() {
        // setMyStateFunction(newValue) will change the value of myStateName to the new one
        if (isBooleanOn === true) {
          setlight(false);
        } else setlight(true);
      }
    
      return (
        <div>
          // show state value
          <h1>{myStateName}</h1>
          // use state as a boolean
          <img
            src={isBooleanOn ? LightBulbOn : LightBulbOff} // ternary operator => boolean ? if true : if false
            onClick={onChangeLight}
          />
        </div>
      );
    }

    `;

  const codeStringNewComponent = `
    // if you need CSS, 
    import "./MyComponent.css";
    // create a new a file MyComponent.jsx with this content
    const MyCompoment = () => { 
      return (
        <div>Hello World</div>
      )
    } 

    export default MyComponent;
    `;

  return (
    <div>
      <Header></Header>

      <div className="padding-footer">
        <CheatSheet
          title="How to add onClick to an html Element"
          code={codeStringOnClick}
        />
        <CheatSheet
          title="How to create a new react component"
          code={codeStringNewComponent}
        />
        <CheatSheet
          title="How to create a state in react"
          code={codeStringReactState}
        />
      </div>
    </div>
  );
};

export default CheatPage;
