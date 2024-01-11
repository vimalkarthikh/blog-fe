import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Info() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 3000; // 3 seconds delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const delay = 7000; // 7 seconds delay
    const timeout = setTimeout(() => {
      navigate("/home");
    }, delay);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
      <div className="container min-vh-100 d-flex align-items-center justify-content-center py-5 py-md-0">
        <div className="col-md-7 bg-light">
          <div className="text-center p-5">
          <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-bee-animal-flaticons-lineal-color-flat-icons-2.png" alt="external-bee-animal-flaticons-lineal-color-flat-icons-2"/>
            <h1 className="text-main fw-bolder">
              Welcome to Blog Bee...!
            </h1>
            <p>
              This application is designed for sharing stories as blogs,
               as well as offering features to
              enhance your blogging experience.
            </p>
            {loading ? (
              <div className="d-flex justify-content-center">
                <Oval
                  height={30}
                  width={30}
                  color="#163020"
                  visible={true}
                  secondaryColor="#163020"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </div>
            ) : (
              <p className="text-success" style={{ fontSize: "48px" }}>
                Buzzing Bee....
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
