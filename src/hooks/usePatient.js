import { useEffect, useState } from "react";

const usePatient = (email) => {
  const [isPatient, setIsPatient] = useState(false);
  const [isPatientLoading, setIsPatientLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://doctor-appointment-server-university.vercel.app/users/patient/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsPatient(data.isPatient);
          setIsPatientLoading(false);
        });
    }
  }, [email]);
  return [isPatient, isPatientLoading];
};

export default usePatient;
