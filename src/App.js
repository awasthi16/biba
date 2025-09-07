import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [about, setAbout] = useState("");

  // Fetch Hello World route
  useEffect(() => {
    fetch("https://bbackend-puce.vercel.app/") // change this to your backend deployed URL
      .then((res) => res.text())
      .then((data) => setMessage(data));

    fetch("https://bbackend-puce.vercel.app/about")
      .then((res) => res.text())
      .then((data) => setAbout(data));
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">🚀 Frontend Connected</h1>
      <p className="mt-5">Root API says: {message}</p>
      <p className="mt-5">About API says: {about}</p>
    </div>
  )
}

export default App