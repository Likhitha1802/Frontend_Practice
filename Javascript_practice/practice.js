var arr = [12,13,14,15,16];
console.log(arr);
var marks = new Array(23,46,78,92,35);
console.log(marks);

//accessing the marks
highest_marks = marks[3];
console.log(highest_marks);

//modifying the marks
marks[0] = 32;
console.log(marks);

//insert at end
marks.push(77);
console.log(marks);

//insert at begin
marks.unshift(12);
console.log(marks);
marks.unshift(37);
console.log(marks);

//splice
marks.splice(4,3,31,35,38);
console.log(marks);

//removing
marks.pop();
console.log(marks);

//removes first element
marks.shift();
console.log(marks);
