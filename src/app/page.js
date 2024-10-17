import LoginPage from "@/components/Login";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <>   <LoginPage />
    <ToastContainer />
    </>

  );
}
