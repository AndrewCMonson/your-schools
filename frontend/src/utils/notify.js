import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type, message) =>
	toast(message, {
		type: type || 'error',
		position: 'top-right',
		theme: 'light',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});
