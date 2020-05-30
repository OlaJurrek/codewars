/* Write a function that when given a URL as a string,
parses out just the domain name and returns it as a string.For example:

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet" */

function domainName(url) {
  const urlWithoutProtocol = url.replace(/(https?:\/\/)?(www.)?/, '');
  const domain = urlWithoutProtocol.slice(0, urlWithoutProtocol.indexOf('.'));
  return domain;
}

function domainNameShorter(url) {
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0];
}

console.log(domainName('http://github.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('https://www.cnet.com'));

console.log(domainNameShorter('http://github.com/carbonfive/raygun'));
console.log(domainNameShorter('http://www.zombie-bites.com'));
console.log(domainNameShorter('https://www.cnet.com'));
