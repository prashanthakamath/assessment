// CertificationForm.js
import React, { useState } from "react";
import "./CertificationForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addCertification } from "../../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const CertificationForm = () => {
  const dispatch = useDispatch();
  const certifications = useSelector((state) => state.certifications);

  // State for form fields
  const [certificationName, setCertificationName] = useState("");
  const [issuer, setIssuer] = useState("");
  const [file, setFile] = useState(null);

  // State for validation errors
  const [errors, setErrors] = useState({
    certificationName: "",
    issuer: "",
    file: "",
  });

  // Validate form fields
  const validateForm = () => {
    const newErrors = { certificationName: "", issuer: "", file: "" };
    let isValid = true;

    if (!certificationName) {
      newErrors.certificationName = "Certification name is required";
      isValid = false;
    }

    if (!issuer) {
      newErrors.issuer = "Issuer is required";
      isValid = false;
    }

    if (!file) {
      newErrors.file = "Please upload a certificate (PDF or JPG)";
      isValid = false;
    } else if (!["application/pdf", "image/jpeg"].includes(file.type)) {
      newErrors.file = "Only PDF and JPG files are allowed";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (certifications.length >= 5) {
      alert("You can only save up to 5 certifications.");
      return;
    }

    if (validateForm()) {
      // Create the certification object
      const newCertification = {
        certificationName,
        issuer,
        file,
      };

      // Dispatch action to save the certification
      dispatch(addCertification(newCertification));

      // Reset form
      setCertificationName("");
      setIssuer("");
      setFile(null);
    }
  };

  return (
    <div className="p-4 bg-white row col-md-12 mx-auto">
      {/* Outer container for heading */}
      <div className="p-4 mb-3">
        <h2 className="text-center no-padding">Skills-Based Certifications</h2>
        <p className="text-center">(You can add up to 5 certifications)</p>
      </div>

      {/* Inner container for form (without <form> tag) */}
      <div className="p-4 border shadow-sm bg-white rounded mb-4 row col-md-8 mx-auto">
        <Row>
          {/* Certification Name Field */}
          <Col md={6} className="mb-3">
            <div>
              <label htmlFor="certificationName">Certification Name</label>
              <input
                type="text"
                id="certificationName"
                value={certificationName}
                onChange={(e) => setCertificationName(e.target.value)}
                className={`form-control ${
                  errors.certificationName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.certificationName}</div>
            </div>
          </Col>

          {/* Issuer Field */}
          <Col md={6} className="mb-3">
            <div>
              <label htmlFor="issuer">Issuer</label>
              <input
                type="text"
                id="issuer"
                placeholder="Enter Issuer"
                value={issuer}
                onChange={(e) => setIssuer(e.target.value)}
                className={`form-control ${errors.issuer ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.issuer}</div>
            </div>
          </Col>

          {/* File Upload Field */}
          <Col md={12} className="mb-12">
            <div className="choose-file">
              <input
                type="file"
                id="file"
                placeholder="Upload a file showing your certification"
                accept=".pdf,.jpg,.jpeg"
                onChange={(e) => setFile(e.target.files[0])}
                className={`form-control ${errors.file ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.file}</div>
            </div>
          </Col>

          {/* Submit Button */}
          <Col md={12} className="text-center">
            <Button variant="primary" onClick={handleSubmit}>
              SAVE CERTIFICATION
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CertificationForm;
