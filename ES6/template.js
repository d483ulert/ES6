const data = [
    {
        name: 'coffee-bean',
        order: true,
        items: ['americano','milk','green-tea']
    },
    {
        name: 'starbukcs',
        order: false
    },
    {
        name: 'coffeekin',
        order: true,
        items: ['americano','latte']
    }

]

//json으로 응답을 받고 , javascript 객체로 변환한 후에 데이터 처리 조작을 한 후에 dom에 추가
//데이터 + HTML 문자열의 결합이 필요하기때문

const template1 = `<div>welcome ${data[0].name}!!`

//console.log(template1)

function fn(tags,name,items){
  //  console.log(tags);

    if(typeof items ==="undefined"){
        items="주문한 내용이 없습니다."
    }
    return (tags[0]+name+tags[1]+items+tags[2]);
}

const template2 = fn`<div>welcome ${data[1].name}!!
<div><h2>주문가능항목</h2><div>${data[1].items}</div>`
//console.log(template2);


data.forEach((v)=>{

    let template3= fn`<div>welcome ${v.name}!!
    <div><h2>주문가능항목</h2><div>${v.items}</div>`
    console.log(template3);
})