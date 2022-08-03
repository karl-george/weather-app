export const calculateDay = (item, offset) => {
  return new Date(item.dt * 1000 - offset * 1000).toString().slice(0, 3);
};

export const calculateTime = (time, offset) => {
  return new Date(time * 1000 - offset * 1000).toString();
};
