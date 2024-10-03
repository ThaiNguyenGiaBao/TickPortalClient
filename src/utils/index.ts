// shotern string

const shortenString = (str: string, maxLen: number = 15) => {
  if (str.length <= maxLen) return str;
  return str.substr(0, maxLen) + "...";
};

export { shortenString };
