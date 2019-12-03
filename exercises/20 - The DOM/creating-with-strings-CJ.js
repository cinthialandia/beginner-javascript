console.log("it's work!!");
const item = document.querySelector(".item");

const width = 500;
const src = `"https://picsum.photos/${width}"`;
const desc = `Cute perrito`;
const myHtml = `
<div class="wrapper">
<h2>Cute${desc}</h2>
<img src="${src}" alt="${desc}"/>
</div>
`;

// turn  a string into a DOM element 

const myFragment = document.createRange().createContextualFragment(myHtml);
document.body.appendChild(myFragment);