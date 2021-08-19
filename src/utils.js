export const handleRemoveEleTags = (string) => {
  const html = string;
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || div.innerText || "";
  return text.replace(/ /g, "");
};

export const removeSignLetter = (str) => {
  str = str.toLowerCase();
  str = str.replace(/ /g, "");
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");
  str = str.replace(/([^0-9a-z-\s])/g, "");
  return str;
};

export const countCharacterSameValue = (str) => {
  const data = str.split("").reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});
  const sortable = Object.fromEntries(
    Object.entries(data).sort(([, a], [, b]) => b - a)
  );
  return Object.keys(sortable).map((key) => {
    return {
      key: key,
      num: data[key],
    };
  });
};

export const sortAlphabetically = (arr) => {
  return arr.sort((a, b) => {
    if (a.fName && b.fName) {
      const textA = a.fName.toUpperCase();
      const textB = b.fName.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    }
    return -1;
  });
};
