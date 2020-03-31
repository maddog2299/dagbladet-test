import React, {useEffect} from 'react';
import './Modal.scss';
import {useSelector, useDispatch} from 'react-redux';
import {togglePopupWindow} from '../../redux/actions/index';
import {modifyArticle} from '../../helpers/index';

const Modal = () => {
	const dispatch = useDispatch();
	const additionalInfo = useSelector(state => state.articles.additionalInfo);
	let timer;
	const deleteArticle = () => timer = setTimeout(() =>
			dispatch(togglePopupWindow(modifyArticle('DELETE', additionalInfo)))
		, 3000);
	useEffect(() => {
		deleteArticle();
	}, [deleteArticle]);
	const restoreHandler = () => {
		clearTimeout(timer);
		return dispatch(togglePopupWindow(modifyArticle('RESTORE', additionalInfo)));
	};
	return (
		<div className="modal">
		  <p>Do you want to restore article?</p>
		  <button onClick={restoreHandler}>Yes!</button>
	  </div>
	);
};
export default Modal;
