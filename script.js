function mincost(arr){ 
//write your code here
	let totalCost = 0;

	while(arr.length > 1){
		arr.sort((a,b) => a-b);

		let first = arr.shift();
		let second = arr.shift();

		let cost = first + second;
		totalCost += cost;

		arr.push(cost)
	}
// return the min cost
	return totalCost;
  
}

module.exports=mincost;
