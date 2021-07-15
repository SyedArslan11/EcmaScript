const AreaOfrectangle =(b,h) => b*h;
const AreaOfTriangle = (b,h) => (1/2)*b*h;
const AreaOfCircle = (r) => (22/7)*r*r;

const b = 27;
const h = 14;
const x = 12;
const r = 7;
const r2 = 5;

console.log(
    (AreaOfrectangle(b-r2,h))+(AreaOfTriangle(b-r2,x))+1/2(AreaOfCircle(r))-(AreaOfCircle(r2))
);
