import {reduxTypes, initialState} from '../../constants/index';
export default function articles (articles = initialState, action) {
  let payload = action.payload;
  switch (action.type) {
    case reduxTypes.GET_ARTICLES_SUCESS:
      return {...articles, list: payload};
    case reduxTypes.GET_ARTICLES_FAILED:
      return {...articles, error: 'Cannot load articles'};
    case reduxTypes.UPDATE_TITLE:
      const {title, rowIndex, columnIndex} = payload;
      articles.list[rowIndex].columns[columnIndex].title = title;
      articles.list[rowIndex] = {...articles.list[rowIndex]};
      return {...articles, list: [...articles.list]};
    case reduxTypes.TOGGLE_POPUP:
      let {additionalInfo} = payload;
      let neededRow = articles.list[additionalInfo.rowIndex];
      if (additionalInfo.toDelete) {
        additionalInfo.toDelete = false;
        neededRow.columns.splice(additionalInfo.columnIndex, 1);
        neededRow = {...neededRow};
      } else if (additionalInfo.hide) {
        neededRow.columns[additionalInfo.columnIndex].hide = true;
        neededRow = {...neededRow};
      } else {
        neededRow.columns[additionalInfo.columnIndex].hide = false;
        neededRow = {...neededRow};
      }
      return {...articles, additionalInfo: {...additionalInfo}};
    default:
      return initialState
  }
}
