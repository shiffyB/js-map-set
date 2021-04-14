function CheckValidation(arr){
    let s=new Set();
    let passwordSplitted,count=0;
    arr.forEach(password => {
        passwordSplitted=password.split(' ');
        s=new Set(passwordSplitted);
        if(s.size===passwordSplitted.length)
            count++;
    });
    return count;
}

let arr=['ee dd cc bb a', 'aa dd cc bb aa','aa bb cc dd aaa']
console.log(CheckValidation(arr))


let classMap=new Map();
classMap.set(212042527,{firstName:'shiffy',lastname:'berman'});
classMap.set(212255252,{firstName:'jjj',lastname:'hhhhhhh'});
classMap.set(212042527,{firstName:'oooo',lastname:'jhjhhh'});
console.log(classMap.size)
classMap.values.forEach(student=>{
    console.log(student.firstName);
})

console.log('end of home work');
