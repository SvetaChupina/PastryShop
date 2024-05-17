const myBtn = document.querySelector('.btn')
myBtn.addEventListener('click', function(){
    let input1 = document.getElementById('inp1')
    let input2 = document.getElementById('inp2')
    let input3 = document.getElementById('inp3')
    if ((input1.value != '')&&(input2.value != '')&&(input3.value != '')){
        alert('Заказ успешно принят! Скоро с вами свяжется менеджер.')
        input1.value = ''
        input2.value = ''
        input3.value = ''
    }
    else{
        alert('Упс! Похоже не все поля были заполнены. Заполните оставшиеся и поробуйте снова!')
    }
})