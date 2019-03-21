import axios from 'axios';
import { IPSERVER, REQUEST_TIME_OUT } from './../shared/config';

export const login = (email, password) => {
	return (dispatch) => {
		loading(dispatch)

		const data = { email, password }

		axios.post(`${IPSERVER}/supplier/login`, data, {
			timeout: REQUEST_TIME_OUT
		})
			.then(response => loginSuccess(dispatch, response))
			.catch(error => loginFail(dispatch, error))
	}
}
