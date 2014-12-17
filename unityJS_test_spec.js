describe("Testing returnVal and groupBy", function(){
	//test input and output
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

	var model = {
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

	var key = 'department';



	it("typeof of key to not be undefined", function() {
	var input = input;
	for(x in input){
		typeof key === 'undefined' ? key = 'department' : key = key;  
			  expect(key).not.toMatch('department');
	}
	});




	it("check for department or other key attribute", function(){
	var input = input

	for(x in input){
		if(result.indexOf(input[x][key]) === -1 && typeof input[x][key] !== 'undefined') {
			result.push(input[x][key]);
		}	
		expect(result).toContain(key);
	}
	});




	it("returnVal result contains expected values", function() {

	var result = [];
	typeof key === 'undefined' ? key = 'department' : key = key;  
		for(var x = 0; x < input.length; x++) {
			if(result.indexOf(input[x][key]) === -1 && typeof input[x][key] !== 'undefined') {
				result.push(input[x][key]);
			}
		}
	//if(result.length === 0) { console.log("ERROR: value not found") } else { return result; }
	expect(result).toContain("Engineering");
	expect(result).toContain("Product");
	});




	it("groupBy returns equal to the model", function() {
	var values = ["Engineering","Product"];
	var result = values;
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
	expect(output).toEqual(model);
	});
});