function Message(props) {
  if (props.age < 18) {
    return <h1>You're a minor</h1>;
  } else {
    if (props.age >= 18 && props.age < 60) {
      return <h1>You're an adult</h1>;
    } else {
      return <h1>You're a senior</h1>;
    }
  }
}

function app() {
  const userAge = 25;
  return <Message age={userAge} />;
}
