import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: async (val) => {
      try {
        var res = await axios.post("http://localhost:5000/user/create", val);
        console.log(res.data);
        formik.setValues({
          name: "",
          email: "",
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

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
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Form;
