const arr1 = [
  [{id: '0', name: ""}, {id: '1', name: ""}, {id: '2', name: ""}],
  [{id: '10', name: ""}, {id: '11', name: ""}, {id: '12', name: ""}],
  [{id: '20', name: ""}, {id: '21', name: ""}, {id: '22', name: ""}]
];
const arr2 = ['10', '11'];

// arr2에 value값 === arr1 내부의 id  >>>>> 배열로 뽑아내고 싶음


let list = [];

function equalValue(){
  arr1.forEach(item=>{
    item.forEach(value=>{
      arr2.forEach(cpValue=>{
        if(value.id === cpValue){
          list.push(value);
        }
      })
    })
  })
}
console.log(equalValue());



console.log(list);