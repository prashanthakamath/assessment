import React from "react";
import { useSelector } from "react-redux";
import { Button, ListGroup, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const SavedCertifications = () => {
  const certifications = useSelector((state) => state.certifications);

  const handleShowCertificate = (file) => {
    const url = URL.createObjectURL(file);
    window.open(url, "_blank");
  };
  if (certifications.length === 0) return null;

  return (
    <div className="p-4  row col-md-12 mx-auto bg-light-subtle">
      <div className="p-4 border shadow-sm  rounded mb-4 row col-md-8 mx-auto bg-light">
        {certifications.length === 0 ? (
          <p>No certifications saved yet.</p>
        ) : (
          <ol>
            {certifications.map((cert, index) => (
              <li key={index} className="mb-3">
                <div>
                  <p>
                    <strong>{cert.certificationName}</strong> {cert.issuer}
                    <br />
                    <Button
                      variant="link"
                      onClick={() => handleShowCertificate(cert.file)}
                    >
                      View Certificate
                    </Button>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default SavedCertifications;
