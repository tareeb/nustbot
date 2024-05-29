const Test = () => {

  async function getResponse() {
    console.log("hello");
  }

  return (
    <div>
      <h1>Test Page</h1>

      <button onClick={getResponse}>Test Button</button>
      <br></br>

    </div>
  );
};

export default Test;