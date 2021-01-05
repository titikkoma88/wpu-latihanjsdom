// DOM Manipulation

// buat elementbaru
// document.createElement()
const pBaru = document.createElement('p');
// document.createTextNode()
const teksBaru = document.createTextNode('Paragraf Baru');

// node.appendChild()
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru);

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

pBaru.style.backgroundColor = 'lightgreen';


// node.insertBefore()
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

liBaru.style.backgroundColor = 'lightgreen';


// parentNode.removeChild()
const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);


// parentNode.replaceChild()
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

// buat element baru
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

h2Baru.style.backgroundColor = 'lightgreen';