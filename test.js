require("./index.js");

var tests = [
	{Id: "13410001", Name: "Marni", GPA: 3.45, Gender: "male"},
	{Id: "13410002", Name: "Dodo", GPA: 3.95, Gender: "female"},
	{Id: "13410003", Name: "Ani", GPA: 2.45, Gender: "male"},
	{Id: "13410004", Name: "Amy", GPA: 2.87, Gender: "male"},
	{Id: "13410005", Name: "Sarbo'ah", GPA: 3.05, Gender: "male"},
	{Id: "13410006", Name: "Tatang", GPA: 3.45, Gender: "male"},
	{Id: "13410007", Name: "Amir", GPA: 3.12, Gender: "female"},
	{Id: "13410008", Name: "Elisa", GPA: 2.85, Gender: "female"},
	{Id: "13410009", Name: "Cupquake", GPA: 2.24, Gender: "male"},
	{Id: "13410010", Name: "Gloom", GPA: 3.43, Gender: "female"},	
	{Id: "13410011", Name: "Paulina", GPA: 3.52, Gender: "male"}
];

console.log("Testing Select function...");
var test1Ok = true;
var i = 0;
var student_names = tests.Select((x) => {
	if(x.Name != tests[i].Name){
		test1Ok = false;
	}
	i++;
});
console.log(test1Ok ? "OK!" : "TEST FAILED!");

console.log("Testing Where function...");
var test2Ok = true;
var high_performance_students = tests.Where(x => x.GPA > 3.5);
test2Ok = high_performance_students.length == 2;
console.log(test2Ok ? "OK!" : "TEST FAILED!");

console.log("Testing All function...");
var test3Ok = true;
test3Ok = tests.All(x => x.GPA <= 3.95);
test3Ok = !tests.All(x => x.GPA > 3.95);
test3Ok = !tests.All(x => x.GPA < 1.5);
console.log(test3Ok ? "OK!" : "TEST FAILED!");

console.log("Testing Any function...");
var test4ok = true;
test4ok = tests.All(x => x.GPA <= 3.5);
test4ok = tests.All(x => x.GPA > 3.5);
test4ok = !tests.All(x => x.GPA < 1.5);
console.log(test4ok ? "OK!" : "TEST FAILED!");

//console.log("Testing Aggregate function...");
//var test5ok = true;
//test5ok = tests.Aggregate((x,y) => (x.GPA + y.GPA));
//console.log(test5ok);

console.log("Testing OrderBy...");
var test6ok = true;
var sortedByGPA = tests.OrderBy((x,y) => (x.GPA - y.GPA));
//sortedByGPA.Select(x => console.log(x.Name + " " + x.GPA));
test6ok = sortedByGPA[0].Name = "Dodo";
test6ok = sortedByGPA[10].Name = "Cupquake";
var sortedByGPAdesc = tests.OrderBy((x,y) => (x.GPA + y.GPA));
//sortedByGPA.Select(x => console.log(x.Name + " " + x.GPA));
test6ok = sortedByGPAdesc[0].Name = "Cupquake";
test6ok = sortedByGPAdesc[10].Name = "Dodo";
console.log(test6ok ? "OK!" : "TEST FAILED!");

console.log("Testing Take...");
var test7ok = tests.Take(5).Count() == 5;
console.log(test7ok ? "OK!" : "TEST FAILED!");