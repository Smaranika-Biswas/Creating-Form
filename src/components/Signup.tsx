import { useState } from "react";
import { Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik } from "formik";
import { signUpSchema } from "../Schemas";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
  address: "",
  contact: "",
};

export default function Signup() {
  const [show, setShow] = useState<boolean | undefined>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const add = (e: any) => {
    fetch("https://fakestoreapi.com/users/", {
      method: "POST",
      body: JSON.stringify({
        email: e.email,
        username: e.username,
        password: e.password,
        name: {
          firstname: e.firstname,
          lastname: e.lastname,
        },
        address: e.address,
        contact: e.contact,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
    console.log(e);
  };

  return (
    <>
      <div
        className="signup"
        style={{ textAlign: "center", cursor: "pointer" }}
        onClick={handleShow}
      >
        <p>Sign up ? </p>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={(value) => {
              add(value);
              handleClose();
              console.log(value);
            }}
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
                    value={values.firstname}
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
                    value={values.lastname}
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
                    value={values.email}
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
                    value={values.username}
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
                      value={values.password}
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
                    type="text"
                    className="form-control"
                    id="validationDefault03"
                    name="address"
                    value={values.address}
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
                    width: "41.5%",
                    marginLeft: "44px",
                  }}
                >
                  <label htmlFor="validationDefault04" className="form-label">
                    Contact No.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault04"
                    name="contact"
                    value={values.contact}
                    onChange={handleChange}
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
                    type="submit"
                    style={{ marginTop: "10px", marginLeft: "300px" }}
                  >
                    Save
                  </button>
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    style={{ margin: "10px", marginTop: "21px" }}
                  >
                    Close
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
      <Outlet />
    </>
  );
}
