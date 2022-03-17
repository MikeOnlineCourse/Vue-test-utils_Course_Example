export const ColorArrPush = (arr, color) => {
  const colorArr = [...arr];
  colorArr.push(color);
  return colorArr;
};

export const ParseData = (key, data, context) => {
  const newData = { ...data };
  newData[key].push(context);
  return newData;
};
