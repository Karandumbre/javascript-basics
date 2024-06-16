function areIsomorphic(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let mapS1 = {};
  let mapS2 = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    // If the mapping doesn't exist in either map, create it
    if (!mapS1[char1] && !mapS2[char2]) {
      mapS1[char1] = char2;
      mapS2[char2] = char1;
    }
    // If the mapping exists but doesn't match the current pair, return false
    else if (mapS1[char1] !== char2 || mapS2[char2] !== char1) {
      return false;
    }
  }

  return true;
}

console.log(areIsomorphic("badc", "baba"));
