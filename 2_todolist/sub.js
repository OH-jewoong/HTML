/*





// 지우기 버튼 누르면 삭제되고 
document.querySelector("deleting_img").addEventListener('click',()=>{

});



// 버튼을 누르면 뿌옇게 처리가 되자
document.querySelectorAll("").addEventListener('click',()=>{

});



const $plants = document.getElementsByClassName('todo_checkbox');


setTimeout(() => {
  if (window.localStorage.getItem(key) === true){
    $plants.checked = !$plants.checked};
}, 0);


*/










const $ul = document.querySelector('body');
const $sul = document.querySelector('.bodys');

//새로운 투두 추가하기 누르면 추가되고 

document.querySelector('.add_button')
.addEventListener('click', () => {
  //아래처럼 innerHTML하면 클래스 단위로도 새로운 요소 만드는게 가능!
  let $newLi = document.createElement('div');
  $newLi.innerHTML = `
    <div class = "todo_list">
      <input class="todo_checkbox" type="checkbox">
      <div class ="word_block">
        <p class ="todo_task"> 안녕하세요</p>
      </div>
      <div class = "todo_button">
        <button class = "button_border">
          <img src="./img/pen.svg" class = "writing_img">
        </button>
        <button class = "button_border">    
          <img src="./img/trash.svg" class = "deleting_img">
        </button>    
      </div>
    </div>` 
  $newLi.classList.add('todo_list');
  $sul.appendChild($newLi);

});



// 원본
const $plants = document.getElementsByClassName('todo_checkbox');

setTimeout(() => {
  if (localStorage.getItem('theme') === "true"){
    $plants[0].checked = !$plants[0].checked;}
}, 0);

document.querySelector('.todo_checkbox')
.addEventListener('click', () => {
  window.localStorage.setItem("theme", $plants[0].checked);
});


// const $plants = document.getElementsByClassName('todo_checkbox');

// setTimeout(() => {
//   for(key of $plants){
//     if (localStorage.getItem(key) === "true"){ //-> 겟아이템 변수가 여러개여야 하는데 
//       key.checked = !key.checked;}    //-> 인덱스
//   }
// }, 0);

// const check = document.querySelectorAll('.todo_checkbox');

// check.forEach((element)=>{
//   element.addEventListener('click', (e) => {
//     console.log(e);
//   //window.localStorage.setItem("theme", $plants[0].checked);
//   })});







// 연필 누르면 입력받아서 다시 쓴 다은에 저장하고 









// 지우기 버튼 누르면 삭제되고 
// document.querySelector('.deleting_img')
// .addEventListener('click', () => {
//   const $ssul =   this.parentNode;
//   $ul.removeChild()

// });





// alert("he");



// document.querySelector('.add_button')
// .addEventListener('click', () => {
  
//   $newLi = document.createElement('.todo_list');
//   $ul.appendChild($newLi);
  
//     e.target.value = '';
//   });
// });





/* 

//window.localStorage.setItem('theme','dark');
const num = window.localStorage.getItem('theme');
alert(num);

쓰기
const $plants = document.getElementsByClassName('todo_checkbox');
console.log($plants);
$plants[1].checked = !$plants[1].checked

읽기
if 
const $plants = document.getElementsByClassName('todo_checkbox');
window.localStorage.setItem(i, $plants[i].checked);
i++;*/