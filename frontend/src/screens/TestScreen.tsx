import { useEffect, useState } from "react";

const TestScreen = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5171/api/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <>
      {data.map((data, index) => (
        <div key={index}>
          <p>{data.id}</p>
          <p>{data.username}</p>
        </div>
      ))}
    </>
  );
};
export default TestScreen;
