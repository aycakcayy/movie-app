import * as Yup from "yup"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { allActions } from "../reduxStore/actions"
import { useFormik } from "formik"
import styled from "styled-components"
import userCredentials from "../logincredentials.json"

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required")
})

export const LoginForm = () => {
  const currentUser = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: ({ email, password }) => {
      if (
        email !== userCredentials.useremail &&
        password !== userCredentials.userpassword
      )
        return alert(`Please check your credentials `)
      if (email !== userCredentials.useremail)
        return alert(`Please check your ${email} `)
      if (password !== userCredentials.userpassword)
        return alert(`Please check your password `)
      dispatch(allActions.userActions.setUser({ email, password }))
      navigate("/")
    },
    validationSchema: LoginSchema
  })

  return (
    <div className="container mb-3">
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email:</label>
    <br/>
      <input
        name="email"
        id="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        type="email"
        placeholder="email"
        className="form-control"
      />
      
      {formik.errors.email && formik.touched.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
       <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password:</label>
       <br/>
      <input
        name="password"
        id="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        type="password"
        placeholder="password"
        className="form-control"
      />
      {formik.errors.password && formik.touched.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <br/> <br/>
      <button type="submit" className="btn btn-primary m-3">
        Submit
      </button>
    </form>
    </div>
  )
}
const Input = styled.input``
