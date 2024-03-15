import toast, { Toaster } from "react-hot-toast";

const baseStyle = {
  borderRadius: "10px",
  background: "white",
  boxShadow: "0 5px 16px rgba(0,0,0,0.2)",
  color: "black",
  textAlign: "start",
};

export const toastSuccess = (message) =>
  toast.success(message, {
    // icon: "🔔",
    style: { ...baseStyle },
  });
export const toastError = (message) =>
  toast.error(message, {
    style: { ...baseStyle },
  });

export const toastMessage = (message) =>
  toast(message, {
    icon: "🔔",
    style: { ...baseStyle },
  });
