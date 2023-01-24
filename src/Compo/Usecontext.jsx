import { useState } from "react";
import ReactDOM from "react-dom/client";


export default function C1() {
  const [user, setUser] = useState("Mogadisho ");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <C1 user={user} />
    </>
  );
}

function C2({ user }) {
  return (
    <>
      <h1>Nairobi</h1>
      <C2 user={user} />
    </>
  );
}

function C3({ user }) {
  return (
    <>
      <h1>Daresalam</h1>
      <C3 user={user} />
    </>
  );
}

function C4({ user }) {
  return (
    <>
      <h1>Doha</h1>
      <C4 user={user} />
    </>
  );
}

function C5({ user }) {
  return (
    <>
      <h1>Beirut</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<C1 />);
