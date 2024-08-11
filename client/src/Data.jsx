import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Data() {
  const [list, setlist] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/user/get");
    setlist(res.data);
    console.log(res.data);
  };

  const handleDelete = async (ide) => {
    const res = await axios.delete("http://localhost:5000/user/del/" + ide);
    console.log(res.data);
    fetchData();
  };

  return (
    <div>
      {list.map((cur) => {
        return (
          <div key={cur.id}>
            <div className="data-design">
              <p>{cur.name}</p>
              <p>{cur.email}</p>

              <Link to={`/edit/${cur.id}`}>
                <button>Update</button>
              </Link>
              <button onClick={() => handleDelete(cur.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Data;
