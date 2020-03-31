import React, {useEffect} from 'react';
import './Main.scss';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import {fetchArticles} from '../../redux/actions/index';
import {generateKey} from '../../helpers/index';
import {Link} from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);
  const additionalInfo = useSelector(state => state.articles.additionalInfo);
  useEffect(() => {
    if (!articles.list.length) {
      dispatch(fetchArticles());
    }
  }, [dispatch, articles]);
  return (
    <>
    {additionalInfo.isPopupOpen && (
      <Modal />
    )}
      {articles.error ? (
        <div className="error-msg">
          <h1>
            {articles.error}
          </h1>
        </div>
      ) : articles.list.length ? (
        <>
          <button className="translate-view-btn">
            <Link to="/list-view">List View</Link>
          </button>
          {articles.list.map((row, index) => (
            <div className="row" key={generateKey(row.type, index)}>
              {row.columns.map((column, i) =>
                <ArticleCard
                  key={generateKey(column.type, i)}
                  rowIndex={index}
                  columnIndex={i}
                  options={column}
                />
              )}
            </div>)
          )}
        </>
          ) : (
            <Loader />
          )
      }}
    </>
  );
};

export default Main;
