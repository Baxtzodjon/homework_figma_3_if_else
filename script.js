let name = 'Alex'
let money = 10000
let account = 7777

let prmt_name = prompt('Как вас зовут ?')

if (prmt_name === name) {
    let prmt_account = +prompt('Номер счета')
    if (prmt_account === account) {
        let prmt_money = +prompt('Сколько обналичить')
        if (prmt_money < money) {
            alert(`Снял: ${prmt_money} \nОстаток: ${money - prmt_money}`)
        } else {
            alert('Нет')
        }
    }else {
        alert('Нет')
    }
} else {
    alert('Нет')
}




