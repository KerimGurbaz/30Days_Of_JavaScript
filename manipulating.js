
link.href = 'https://developer.mozilla.org';
link.textContent = 'Mozilla Developer Network';


const sect = document.querySelector('section');


const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';


sect.appendChild(para);


const linkPara = document.querySelector('p');
linkPara.appendChild(text);
