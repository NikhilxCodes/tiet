import React, { useEffect, useState } from "react";
import { userContext } from "../store/userContext";
import { api } from "../lib/utils";
import { dataPass, userInterface } from "../lib/types.ts";
import { prescriptionContext } from "../store/prescriptionContext";

export default function Profile({ children }: { children: React.ReactNode }) {
  const [prescription, setPrescription] = useState<dataPass>({
    _id: "",
    name: "",
    email: "",
    gender: "",
    mobile_no: "",
    age: "",
    dob: new Date(),
    addr: "",
    staffId: "",
    roll_no: "",
    hostel: "",
    year: "",
    room_no: "",
    department: "",
    spo2: "",
    bp: "",
    heart_rate: "",
    bmi: "",
    glucose: "",
    respiratory_rate: "",
    pregnant: false,
    prescription: [],
  });
  const [user, dispatch] = useState<userInterface>({
    _id: "",
    name: "",
    email: "",
    gender: "",
    role: "",
    mobile_no: "",
    dob: new Date(),
    addr: "",
    staffId: "",
    roll_no: "",
    hostel: "",
    year: "",
    room_no: "",
    department: "",
    prescription: [],
  });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await api.post(`/user/checkLogin`, {
        withCredentials: true,
      });
      const data = response.data;

      dispatch(data);
    };
    fetchUser();
  }, []);

  return (
    <prescriptionContext.Provider value={{ prescription, setPrescription }}>
      <userContext.Provider value={{ user, dispatch }}>
        {children}
      </userContext.Provider>
    </prescriptionContext.Provider>
  );
}
