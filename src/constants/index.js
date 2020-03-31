const
	UPDATE_TITLE = 'UPDATE_TITLE',
	TOGGLE_POPUP = 'TOGGLE_POPUP',
	GET_ARTICLES_SUCESS = 'GET_ARTICLES_SUCESS',
	GET_ARTICLES_FAILED = 'GET_ARTICLES_FAILED';

export const reduxTypes = {
	GET_ARTICLES_SUCESS: GET_ARTICLES_SUCESS,
	GET_ARTICLES_FAILED: GET_ARTICLES_FAILED,
	UPDATE_TITLE: UPDATE_TITLE,
	TOGGLE_POPUP: TOGGLE_POPUP
};

export const endpoints = {
  BASCIC_URL: 'https://storage.googleapis.com/aller-structure-task',
	GET_ARTICLES: '/test_data.json'
};

export const initialState = {
	additionalInfo: {
		isPopupOpen: false,
		columnIndex: 0,
		rowIndex: 0,
		hide: false,
		toDelete: false
	},
	list: []
};

export const dimensionsCoefs = {
	width: 1,
	height: 3
};
