# linq-equivalent
Just simple array extension functions to do LINQ operations like C# in Javascript.

## Getting Started:
You can install this as node package or just use it directly on html

### Install as node package
1. Run `npm install linq-equivalent --save`
2. Add `require("linq-equivalent");` on the beginning of your scripts.

### Or, include the script on your HTML
`<script src="linq-equivalent.min.js"></script> `

## Examples (using ES6):

```
require("linq-equivalent");

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

var high_performance_students = tests.Where(x => x.GPA > 3.25).Select(x => x.Name).Select(x => console.log(x));

var five_best_students = tests.OrderByDescending(x => x.GPA).Take(5).Select(x => console.log(x.Name));
```

## Examples (without ES6):

```
...
var high_performance_students = tests.Where(function(x){return x.GPA > 3.25;}).Select(function(x){return x.Name;}).Select(function(x){console.log(x);}));

var five_best_students = tests.OrderByDescending(function(x){return x.GPA;}).Take(5).Select(function(x){console.log(x.Name);}));
```


## How to contribute/test:
1. Clone this project: `git clone https://github.com/fauzanazhiman/linq-equivalent.git`
2. `npm install`
3. Make a new branch
4. Edit index.js as you wish, you can also add test cases on test.js
5. Run `npm test` or `node test.js` to do unit testing.
6. Run `node minify.js` if you want to create minified standalone js file of the script.
6. Make a pull request :D
