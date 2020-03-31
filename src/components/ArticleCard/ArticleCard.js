import React, { useRef, useEffect, useState } from "react";
import './ArticleCard.scss';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getClassName, formatImgUrl, modifyArticle} from '../../helpers/index';
import {saveNewTitle, togglePopupWindow} from '../../redux/actions/index';

const ArticleCard = ({options, rowIndex, columnIndex}) => {
	const dispatch = useDispatch();
	let additionalInfo = useSelector(state => state.articles.additionalInfo);
	const {width, url, title, imageUrl, hide} = options;
	const ref = useRef();
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const [editable, setEditable] = useState(false);
	const [articleTitle, setArticleTitle] = useState(title);
	useEffect(() => {
		if (ref.current) {
			setDimensions({
				width: ref.current.offsetWidth,
				height: ref.current.offsetHeight
			});
		}
	}, []);
	const handleEdit = () => setEditable(!editable);
	const handleChange = (e) => setArticleTitle(e.target.value);
	const saveHandler = () => {
		dispatch(saveNewTitle(articleTitle, rowIndex, columnIndex));
		return handleEdit();
	};
	const handleDelete = () => {
		dispatch(togglePopupWindow(modifyArticle('HIDE', additionalInfo, rowIndex, columnIndex )));
	};
	return (
		<>
		{ !hide && (
		  <article ref={ref} className={getClassName(width)}>
			  <img src={formatImgUrl(imageUrl, dimensions)} alt={title} />
			  { editable ? (
				  <input type="text" value={articleTitle} onChange={handleChange}/>
			  ) : (
				  <a target="blank" href={url}>
					  <span>{title}</span>
				  </a>
			  )
			  }
			  <div className="action-wrapper">
				  <button className="edit-btn" onClick={!editable ? handleEdit : saveHandler}>
					  {!editable ? 'Edit' : 'Save'}
				  </button>
				  <button className="delete-btn" onClick={handleDelete}>Delete</button>
			  </div>
		  </article>
	  )}
		</>
	);
};

ArticleCard.propTypes = {
	options: PropTypes.shape({
		type: PropTypes.string,
		width: PropTypes.number,
		url: PropTypes.string,
		title: PropTypes.string,
		imageUrl: PropTypes.string,
	}),
	rowIndex: PropTypes.number,
	columnIndex: PropTypes.number
};

export default ArticleCard;
