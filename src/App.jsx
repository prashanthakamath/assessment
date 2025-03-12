import React from "react";
import CertificationForm from "./components/CertificationForm/CertificationForm";
import SavedCertifications from "./components/SavedCertifications/SavedCertifications";

const App = () => {
  return (
    <div className="App">
      <CertificationForm />
      <SavedCertifications />
    </div>
  );
};

export default App;
