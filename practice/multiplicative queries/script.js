function main(input) {
    var givenInput = input;
    givenInput = givenInput.split('\n');
    var entries = givenInput[0].split(' '),
        arraySize = Number(entries[0]),
        maximumValue = Number(entries[1]);
    querySize = Number(entries[2]),
        arrayA = givenInput[1],
    arrayFunc = givenInput[2],
    queries = [],
    finalProduct = 1;
    arrayA = arrayA.split(' ').map(Number);
    arrayFunc = arrayFunc.split(' ').map(Number);
    var Query = function(min, max) {
        this.min = min;
        this.max = max;
    }
    for (var i = 3; i < querySize + 3; i++) {
        var entry = givenInput[i].split(' ');
        var min = Number(entry[0]),
            max = Number(entry[1]);
        queries.push(new Query(min, max));
    }

    function findOccurrence(element, start, end){
        var count = 0;
        for(var j = start; j <= end; j++){
            if(arrayA[j] === element){
                count++;
            }
        }
        return count;
    }


        queries.map(function(query){
            var start = query.min - 1,
                end = query.max - 1;
                var product = 1;
                for(var j = 1; j <= maximumValue; j++){
                    product *= arrayFunc[findOccurrence(j, start, end)];
                }

                finalProduct *= product;
        });
        console.log(Number.isSafeInteger(finalProduct));
        console.log(finalProduct);
        console.log(Math.pow(2,53));
}

main('5 5 3\n1 2 2 3 3\n1 1 2 3 4 5\n2 4\n1 2\n4 5');