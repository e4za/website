const birth = new Date('2009-07-17');
const now = Date.now(); 

document.querySelector("#title").innerHTML = "eza · aspiring engineer · " + Math.floor((now - birth) / (1000 * 60 * 60 * 24 * 365.25)) + " years old · he/him"