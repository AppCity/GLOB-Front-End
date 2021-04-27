import actionTypes from '../types'

//Api
// import { NEXTApi } from '../../api/axios'



const setLoading = (status) =>
{
	return {
		type: actionTypes.SET_LOADING,
		payload: status
	}
}


//Middleware
// export const submitContactForm = (fname, lname,	email, message) =>
// {
// 	const contactFormBody = {fname, lname,	email, message}

// 	return dispatch =>
// 	{
// 		dispatch(messageStatus(null))
// 		dispatch(setLoading(true))


// 		NEXTApi.post("/email", contactFormBody)
// 		.then(resp => 
// 		{
// 			dispatch(messageStatus("Success"))
// 			dispatch(setLoading(false))
// 		})
// 		.catch(err => 
// 		{
// 			dispatch(setLoading(false))
// 			dispatch(messageStatus("Error"))
// 		})
// 	}
// }