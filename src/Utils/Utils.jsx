import { toast } from "react-toastify";

// show password
export function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password-input");
  const eyeIcon = document.querySelector(".eyeIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
  }
}

export default function showCustomConfirmationToast(message, onConfirm) {
  const handleConfirm = () => {
    onConfirm(true);
    toast.dismiss();
  };

  const handleCancel = () => {
    onConfirm(false);
    toast.dismiss();
  };

  toast(
    <div className="custom-confirmation-toast">
      <div className="toast-message">{message}</div>
      <button className="toast-confirm-button" onClick={handleConfirm}>
        Confirm
      </button>
      <button className="toast-cancel-button" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}
