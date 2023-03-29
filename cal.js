let num =0 ;
let symbol ;

const reset = document.querySelector('#reset');


function btn (a) {
    resultFld.value += a;
}

function cal(b) {
    let firstNum = parseInt(document.getElementById("resultFld").value);
    num = firstNum; //첫번 째 값 저장
    symbol = b ;
    return document.getElementById("resultFld").value = "";
}



function result(){
    let secondNum = parseInt(document.getElementById("resultFld").value);
    let result;

    switch(symbol){
        case '+':
            result = num+secondNum;
            document.querySelector('#resultFld').value = result;
            break;
    
        case '-':
            result = num-secondNum;
            document.querySelector('#resultFld').value = result;
            break;
        case '*':
            result = num*secondNum;
            document.querySelector('#resultFld').value = result;
            break;
        case '/':
            result = num/secondNum;
            document.querySelector('#resultFld').value = result;
            break;
        case '%':
            result = num%secondNum;
            document.querySelector('#resultFld').value = result;
            break;
}

}



reset.onclick = function(){ // 초기화 버튼 누를 때
    resultFld.value = "";
}
