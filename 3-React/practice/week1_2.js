const arr = [1,2,5,3,-1];
console.log(arr)


arr.sort()
console.log(arr)


arr.includes(1)

// map

const arr1 = [5,21,8,100]

for(let i = 0; i < arr1.length;  i++) {
    arr[i] += 2
}


arr1.forEach((n,i) => arr[i] += 2);

const arr2 = arr1.map(n => n + 2);
console.log(arr2)

let x = 1;

x+='';
console.log(typeof(x))

x.