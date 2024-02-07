import toast, { Toaster } from 'react-hot-toast';

export const toastSuccess = (message) => toast.success(message, {
    // icon: "🔔",
    style: {
        borderRadius: '10px',
        background: "white",
        boxShadow: "0 5px 16px rgba(0,0,0,0.2)",
        color: "black",
        border: "2px solid #E76020",
        textAlign: "start"
    }
});
export const toastError = (message) =>  toast.error(message, {
    style: {
        borderRadius: '10px',
        background: "white",
        boxShadow: "0 5px 16px rgba(0,0,0,0.2)",
        color: "black",
        border: "2px solid #E76020",
        textAlign: "start"
    }
})

export const toastMessage = (message)=> toast(message,  {
    icon: "🔔",
    style: {
        borderRadius: '10px',
        background: "white",
        boxShadow: "0 5px 16px rgba(0,0,0,0.2)",
        color: "black",
        border: "2px solid #E76020",
        textAlign: "start"
    }
})