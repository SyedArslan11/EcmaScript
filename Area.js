const AreaOfrectangle = (b, w) => b * w;

const AreaOfTriangle = (b, h) => (1 / 2) * b *h;

const AreaOfCircle = (r) => (22/7) *r*r;

console.log(`Area Of Rectangle Is ${AreaOfrectangle(10,20)} Sq. Unit`);

console.log(`Area Of Triangle Is ${AreaOfTriangle(10,20)}Sq. unit`);

console.log(`Area Of Circle is ${AreaOfCircle(50)}sq. Unit`)


const x=10;
const b=15;
const h=30;

console.log(
    `Area of Diagram III is ${AreaOfrectangle(x,b) + AreaOfTriangle(b,h-x)}`
);