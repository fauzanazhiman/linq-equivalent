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
test3Ok = !test3Ok ? false : tests.All(x => x.GPA <= 3.95);
test3Ok = !test3Ok ? false : !tests.All(x => x.GPA > 3.95);
test3Ok = !test3Ok ? false : !tests.All(x => x.GPA < 1.5);
console.log(test3Ok ? "OK!" : "TEST FAILED!");

console.log("Testing Any function...");
var test4ok = true;
test4ok = !test4ok ? false : tests.Any(x => x.GPA > 3.5);
test4ok = !test4ok ? false : !tests.Any(x => x.GPA > 3.95);
test4ok = !test4ok ? false : !tests.Any(x => x.GPA < 1.5);
console.log(test4ok ? "OK!" : "TEST FAILED!");

console.log("Testing Aggregate function...");
var test5ok = true;
test5ok = tests.Aggregate((x,y) => (x + y.Name));
console.log(test5ok);

console.log("Testing OrderBy, OrderByDescending, ThenBy, ThenByDescending...");
var test6ok = true;
var sortedByGPA = tests.OrderBy(x => x.GPA);
//sortedByGPA.Select(x => console.log(x.Name + " " + x.GPA));
test6ok = !test6ok ? false :sortedByGPA[0].Name == "Cupquake";
test6ok = !test6ok ? false :sortedByGPA[10].Name == "Dodo";

var sortedByGPAdesc = tests.OrderByDescending(x => x.GPA);
//sortedByGPAdesc.Select(x => console.log(x.Name + " " + x.GPA));
test6ok = !test6ok ? false :sortedByGPAdesc[0].Name == "Dodo";
test6ok = !test6ok ? false :sortedByGPAdesc[10].Name == "Cupquake";

var sortedByGenderAndGPA_1 = tests.OrderBy(x => x.Gender).ThenBy(x => x.GPA);
//sortedByGenderAndGPA_1.Select(x => console.log(x.Name + " " + x.Gender + " " + x.GPA));
test6ok = !test6ok ? false :sortedByGenderAndGPA_1[0].Name == "Elisa";
test6ok = !test6ok ? false :sortedByGenderAndGPA_1[3].Name == "Dodo";
test6ok = !test6ok ? false :sortedByGenderAndGPA_1[10].Name == "Paulina";

var sortedByGenderAndGPA_2 = tests.OrderBy(x => x.Gender).ThenByDescending(x => x.GPA);
//sortedByGenderAndGPA_2.Select(x => console.log(x.Name + " " + x.Gender + " " + x.GPA));
test6ok = !test6ok ? false :sortedByGenderAndGPA_2[0].Name == "Dodo";
test6ok = !test6ok ? false :sortedByGenderAndGPA_2[4].Name == "Paulina";
test6ok = !test6ok ? false :sortedByGenderAndGPA_2[10].Name == "Cupquake";

var sortedByGenderAndGPA_3 = tests.OrderByDescending(x => x.Gender).ThenBy(x => x.GPA);
//sortedByGenderAndGPA_3.Select(x => console.log(x.Name + " " + x.Gender + " " + x.GPA));
test6ok = !test6ok ? false :sortedByGenderAndGPA_3[0].Name == "Cupquake";
test6ok = !test6ok ? false :sortedByGenderAndGPA_3[7].Name == "Elisa";
test6ok = !test6ok ? false :sortedByGenderAndGPA_3[10].Name == "Dodo";

var sortedByGenderAndGPA_4 = tests.OrderByDescending(x => x.Gender).ThenByDescending(x => x.GPA);
//sortedByGenderAndGPA_4.Select(x => console.log(x.Name + " " + x.Gender + " " + x.GPA));
test6ok = !test6ok ? false :sortedByGenderAndGPA_4[0].Name == "Paulina";
test6ok = !test6ok ? false :sortedByGenderAndGPA_4[7].Name == "Dodo";
test6ok = !test6ok ? false :sortedByGenderAndGPA_4[10].Name == "Elisa";

console.log(test6ok ? "OK!" : "TEST FAILED!");

console.log("Testing Take...");
var test7ok = tests.Take(5).Count() == 5;
console.log(test7ok ? "OK!" : "TEST FAILED!");

console.log("Testing Skip...");
var test8ok = tests.Skip(5).Count() == 6;
console.log(test8ok ? "OK!" : "TEST FAILED!");

console.log("Testing Max...");
var test9ok = tests.Max(i => i.GPA) == "3.95";
console.log(test9ok ? "OK!" : "TEST FAILED!");

console.log("Testing Min...");
var test10ok = tests.Min(i => i.GPA) == "2.24";
console.log(test10ok ? "OK!" : "TEST FAILED!");

console.log("Testing FirstOrDefault...");
var test11ok = tests.FirstOrDefault(i => i.Gender == "male").Name == "Marni";
test11ok =  !test11ok ? false :tests.FirstOrDefault(i => i.Gender == "female").Name == "Dodo";
test11ok =  !test11ok ? false :tests.FirstOrDefault(i => i.Gender == "transgender") == null;
console.log(test11ok ? "OK!" : "TEST FAILED!");

console.log("Testing LastOrDefault...");
var test12ok = tests.LastOrDefault(i => i.Gender == "male").Name == "Paulina";
test12ok =  !test12ok ? false :tests.LastOrDefault(i => i.Gender == "female").Name == "Gloom";
test12ok =  !test12ok ? false :tests.LastOrDefault(i => i.Gender == "transgender") == null;
console.log(test12ok ? "OK!" : "TEST FAILED!");

var Fruits_1 = [
	{Id: 1, Name: "Orange"},
	{Id: 2, Name: "Apple"},
	{Id: 3, Name: "Avocado"},
	{Id: 4, Name: "Snakefruit"},
	{Id: 4, Name: "Snakefruit"},
];

var Fruits_2 = [
	{Id: 3, Name: "Avocado"},
	{Id: 4, Name: "Snakefruit"},
	{Id: 5, Name: "Strawberry"},
	{Id: 6, Name: "Grape"},	
];

console.log("Testing Distinct...");
var Fruit1_Distinct = Fruits_1.Distinct((i,j) => i.Id == j.Id);
//Fruit1_Distinct.Select(i => console.log(i.Name));
var test15ok = Fruit1_Distinct.Count() == 4;
console.log(test15ok ? "OK!" : "TEST FAILED!");

console.log("Testing Union...");
var FruitUnion = Fruits_1.Union(Fruits_2);
//FruitUnion.Select(i => console.log(i.Name));
var test13ok = FruitUnion.Count() == 9;
console.log(test13ok ? "OK!" : "TEST FAILED!");

console.log("Testing Intersect...");
var FruitIntersect = Fruits_1.Intersect(Fruits_2, (i,j) => i.Id == j.Id);
//FruitIntersect.Select(i => console.log(i.Name));
var test14ok = FruitIntersect.Count() == 2;
console.log(test14ok ? "OK!" : "TEST FAILED!");

console.log("Testing Except...");
var FruitExcept = Fruits_1.Except(Fruits_2, (i,j) => i.Id == j.Id);
//FruitExcept.Select(i => console.log(i.Name));
var test16ok = FruitExcept[0].Name == "Orange" && FruitExcept[1].Name == "Apple";
console.log(test16ok ? "OK!" : "TEST FAILED!");