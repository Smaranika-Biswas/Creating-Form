import "./FormPage.css";
import { Formik } from "formik";
import { signUpSchema } from "../Schemas/index";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dataModule } from "./DataModule";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
  address: "",
  contact: "",
};

export default function FormPage() {
  const { id } = useParams();
  const [user, setUser] = useState<dataModule>({});
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((error) => console.log(error));
  }, []);
  // console.log(user);

  const updateUser = () => {
    fetch(`https://fakestoreapi.com/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        email: "John@gmail.com",
        username: "johnd",
        password: "m38rmF$",
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const defaultValues = {
    firstname: user.name?.firstname,
    lastname: user.name?.lastname,
    email: user.email,
    username: user?.username,
    password: user?.password,
    address: user.address?.city,
    contact: user.phone,
  };

  return (
    <>
      <div className="form-container">
        <Formik
          initialValues={{ ...initialValues, ...defaultValues }}
          validationSchema={signUpSchema}
          onSubmit={(value) => {
            updateUser();
            console.log(value);
          }}
          enableReinitialize
        >
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            touched,
            errors,
          }) => (
            <form
              className="row"
              style={{ height: "60%" }}
              onSubmit={handleSubmit}
            >
              <div className="col-sm-6">
                <label htmlFor="validationDefault01" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  name="firstname"
                  // defaultValue={user?.name?.firstname}
                  value={values.firstname || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ width: "80%" }}
                />
                {errors.firstname && touched.firstname ? (
                  <p className="form-error" style={{ width: "80%" }}>
                    {errors.firstname}
                  </p>
                ) : null}
              </div>
              <div className="col-sm-6">
                <label htmlFor="validationDefault02" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  name="lastname"
                  // defaultValue={user?.name?.lastname}
                  value={values.lastname || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ width: "80%" }}
                />
                {errors.lastname && touched.lastname ? (
                  <p className="form-error">{errors.lastname}</p>
                ) : null}
              </div>
              <div className="col-sm-6" style={{ width: "382px" }}>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  // defaultValue={user?.email}
                  value={values.email || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="name@example.com"
                  style={{ width: "80%" }}
                />
                {errors.email && touched.email ? (
                  <p className="form-error" style={{ width: "80%" }}>
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="validationDefaultUsername"
                  className="form-label"
                >
                  Username
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  name="username"
                  // defaultValue={user?.username}
                  value={values.username || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-describedby="inputGroupPrepend2"
                  style={{ width: "80%" }}
                />
                {errors.username && touched.username ? (
                  <p className="form-error" style={{ width: "80%" }}>
                    {errors.username}
                  </p>
                ) : null}
              </div>
              <div className="col-sm-6">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <div className="col-sm-4">
                  <input
                    style={{ width: "242%" }}
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    name="password"
                    // defaultValue={user?.password}
                    value={values.password || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error" style={{ width: "280px" }}>
                      {errors.password}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="col-sm-6" style={{ width: "41%" }}>
                <label htmlFor="validationDefault03" className="form-label">
                  Address
                </label>
                <input
                  type="address"
                  className="form-control"
                  id="validationDefault03"
                  name="address"
                  // defaultValue={user?.address?.city}
                  value={values.address || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.address && touched.address ? (
                  <p className="form-error" style={{ width: "80%" }}>
                    {errors.address}
                  </p>
                ) : null}
              </div>
              <div
                className="col-sm-6"
                style={{
                  width: "40.5%",
                  // marginLeft: "70px"  //if confirm_password, then use it
                }}
              >
                <label htmlFor="validationDefault04" className="form-label">
                  Contact No.
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="validationDefault04"
                  name="contact"
                  // defaultValue={user?.phone}
                  value={values.contact || ""}
                  onChange={(e) => handleChange(e.target.value)}
                  onBlur={handleBlur}
                />
                {errors.contact && touched.contact ? (
                  <p className="form-error" style={{ width: "80%" }}>
                    {errors.contact}
                  </p>
                ) : null}
              </div>

              <div className="col-12">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => back()}
                  style={{ marginTop: "10px", marginLeft: "300px" }}
                >
                  Back
                </button>
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ marginTop: "10px", marginLeft: "10px" }}
                >
                  Update
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
