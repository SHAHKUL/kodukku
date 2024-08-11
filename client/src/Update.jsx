import { useFormik } from "formik";
import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const param = useParams();
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: async (val) => {
      try {
        var res = await axios.put(
          "http://localhost:5000/user/update/" + param.id,
          val
        );
        console.log(res.data);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/user/get/" + param.id);
    console.log(res.data[0]);
    formik.setValues(res.data[0]);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <label>Email</label>
        <input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
