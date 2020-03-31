import {reduxTypes} from '../../constants/index';
import api from '../../helpers/api';

export const fetchArticles = () => {
	return dispatch => {
		api.getArticles()
			.then(
				response => {
					dispatch({type: reduxTypes.GET_ARTICLES_SUCESS, payload: response[0]})
				},
				error => {
					dispatch({type: reduxTypes.GET_ARTICLES_FAILED, payload: error});
			    throw error
        })
  }
};

export const saveNewTitle = (title, rowIndex, columnIndex) => {
	return dispatch => dispatch({type: reduxTypes.UPDATE_TITLE, payload: {title, rowIndex, columnIndex}})
};

export const togglePopupWindow = (additionalInfo) => {
	return dispatch => dispatch({type: reduxTypes.TOGGLE_POPUP, payload: {additionalInfo}})
};
