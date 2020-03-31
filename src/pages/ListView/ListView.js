import React, {useEffect} from 'react';
import './ListView.scss';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../components/Loader/Loader';
import {fetchArticles} from '../../redux/actions/index';
import {generateKey, getAllColumns} from '../../helpers/index';
import {Link} from "react-router-dom";

const ListView = () => {
  const dispatch = useDispatch();
  const columns = useSelector(state => getAllColumns(state.articles));
  useEffect(() => {
    if (!columns.length) {
      dispatch(fetchArticles());
    }
  }, [dispatch, columns]);
  return (
    <>
    {columns.error ? (
      <div className="error-msg">
        <h1>
          {columns.error}
        </h1>
      </div>
    ) : columns.length ? (
      <>
        <button className="translate-view-btn">
          <Link to="/">Main View</Link>
        </button>
        {columns.map((column, index) => (
          <div className="row" key={generateKey(column.type, index)}>
            <article>
              <a target="blank" href={column.url}>
                <span>{column.title}</span>
              </a>
            </article>
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

export default ListView;
