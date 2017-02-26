const lowerCaseIncludes = (haystack, needle) => haystack.toLowerCase().includes(needle);

const getLanguage = (string) => {
  const keywordLanguageCodeMap = {
    'eesti k': 'et',
    'vene k': 'ru',
    'inglise k': 'en',
  };

  const foundKeyword = Object.keys(keywordLanguageCodeMap).find(
    keyword => lowerCaseIncludes(string, keyword)
  );

  return keywordLanguageCodeMap[foundKeyword];
};

const getDimensions = (string) => {
  if (lowerCaseIncludes(string, '3d')) return 3;
  if (lowerCaseIncludes(string, '5d')) return 5;

  return null;
};

const getIfIsImax = string => lowerCaseIncludes(string, 'imax');

module.exports = { getLanguage, getDimensions, getIfIsImax };
