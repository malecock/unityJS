
<script>
var input = [
    {
        "name": "Michael",
        "department": "Engineering"
    },
    {
        "name": "Matt",
        "department": "Engineering"
    },
    {
        "name": "Mark",
        "department": "Product"
    }
];

var output = {
    "Engineering": [
        {
            "name": "Michael",
            "department": "Engineering"
        },
        {
            "name": "Matt",
            "department": "Engineering"
        }
    ],
    "Product": [
        {
            "name": "Mark",
            "department": "Product"
        }
    ]
};

var returnVal = function(input, key) {
	//takes an array of objects and returns an arry of either the unique value of the key department or an user-defined attribute of another key
	var result = [];
	typeof key === 'undefined' ? key = 'department' : key = key;  
	for(var x = 0; x < input.length; x++) {
		if(result.indexOf(input[x][key]) === -1 && typeof input[x][key] !== 'undefined') {
			result.push(input[x][key]);
		}
	}
if(result.length === 0) { console.log("ERROR: value not found") } else { return result; }
}

var groupBy = function(values, input) {
	//takes an array of values by which to group an array of objects
	var output = {};
	for(var y =0; y < values.length; y++) {
		var obj = [];
		for(var x = 0; x < input.length; x++) {
			for(value in input[x]){
				var value = input[x][value];
				if(value.indexOf(result[y]) > -1 && typeof value.indexOf(result[y]) !== 'undefined' && result[y] == value){
					obj.push(input[x]);
					output[result[y]] = obj;
				}
			}
		}
	}
if(output.length === 0) { console.log("ERROR: no output in grouping")} else { return output; }
}

var result = returnVal(input);
var group = groupBy(result, input);
console.log(group)
console.log(output)

</script>