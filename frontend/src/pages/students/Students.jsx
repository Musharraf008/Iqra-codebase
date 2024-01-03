import React, { useState, useEffect } from "react";
import "./students.css";
import axios from "axios";
import Nav from "../../components/nav/Nav";
import Footer from '../../components/footer/Footer'

const Students = () => {
  const [users, setUsers] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    axios
      .get("https://iqra-backend-35cn.onrender.com/students")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(users);
  }, []);
  return (
    <div className="students-container">
        <div className="student-nav-wrapper">
            <Nav alternate={true} />
        </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Father's name</th>
            <th>Class</th>
            <th>Gender</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {users.map((info, index) => {
            return (
              <tr key={index}>
                <td>{info.name}</td>
                <td>{info.fname}</td>
                <td>{info.class}</td>
                <td>{info.gender}</td>
                <td>{info.mobile}</td>
                <td>{info.email}</td>
                <td>{info.date}</td>
                <td>{info.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Students;
