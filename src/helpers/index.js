import {dimensionsCoefs} from '../constants/index';

export const getClassName = (width) => `col-${width}`;

export const generateKey = (type, i) => `${type}-${i}`;

export const formatImgUrl = (imageUrl, dimensions) => {
  if (dimensions.height && dimensions.width) {
    return `${imageUrl}&width=${dimensions.width * dimensionsCoefs.width}&height=${dimensions.height * dimensionsCoefs.height}`;
  }
};

export const getAllColumns = (articles) => {
  const columns = [];
  articles.list.forEach(article => {
    article.columns.forEach(column => columns.push(column));
  });
  return columns;
};

export const modifyArticle = (type, additionalInfo, rowIndex = 0, columnIndex = 0) => {
  switch (type) {
    case 'HIDE':
      additionalInfo = {
        hide: true,
        isPopupOpen: !additionalInfo.isPopupOpen,
        rowIndex,
        columnIndex
      };
      break;
    case 'DELETE':
      additionalInfo = {
        ...additionalInfo,
        isPopupOpen: false,
        toDelete: true,
      };
      break;
    case 'RESTORE':
      additionalInfo = {
        ...additionalInfo,
        hide: false,
        isPopupOpen: false,
        toDelete: false,
      };
      break;
  }
  return additionalInfo;
};