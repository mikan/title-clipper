/* node:coverage disable */
if (this.chrome) {
  chrome.runtime.onMessage.addListener(() => {
    const title = document.getElementsByTagName("title")[0].textContent;
    const url = window.location.href;
    const result = makeText(title, url);
    document.getElementsByTagName("body")[0].focus();
    navigator.clipboard.writeText(result).then(() => {
      console.log("ec-url-cleaner: " + result);
    });
  });
}
/* node:coverage enable */

/**
 * Make a single text from title and URL.
 *
 * @param title {string} title as string
 * @param url {string} URL as string
 * @return string
 */
function makeText(title, url) {
  if (title) {
    return title + "\n" + url;
  }
  return url;
}

try {
  module.exports = { makeText };
} catch (e) {
  // module used by unit testing
}
