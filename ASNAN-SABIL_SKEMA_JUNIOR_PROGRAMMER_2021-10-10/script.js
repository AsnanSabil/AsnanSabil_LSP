/* lakukan pengujian dengan console.log(number) */
/*element-element <button> diambil dengan menggunakan class “number”*/
const numbers=document.querySelectorAll(".number")


/* lakukan pengujian dengan console.log("number is pressed") */
const calculatorScreen=document.querySelector('.calculator-screen')
const updateScreen=(number)=>{
	calculatorScreen.value=number
}


/* membuat logika pada kalkulator */
let prevNumber=''
let calculationOperator=''
let currentNumber='0'

const inputNumber =(number)=>{
	
if (currentNumber==='0'){
	currentNumber=number
}else {
	currentNumber +=number
}
}


/* lakukan pengujian dengan console.log(event.target.value) */
numbers.forEach((number)=>{
	number.addEventListener("click", (event)=>{
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

/* kode JS untuk operator */
const operators =document.querySelectorAll(".operator")


/* lakukan pengujian dengan console.log(event.target.value) */
operators.forEach((operator)=>{
	operator.addEventListener("click", (event)=>{
		inputOperator(event.target.value)	
	})
})


const inputOperator=(operator)=>{
	if (calculationOperator===''){
	prevNumber=currentNumber
}
	calculationOperator=operator
	currentNumber='0'
}


/* lakukan pengujian dengan console.log("equal button is pressed") */
const equalSign =document.querySelector('.equal-sign')

equalSign.addEventListener('click', ()=>{
	calculate()
	updateScreen(currentNumber)
})


/* case operator pada kalkulator */
const calculate =()=>{
	let result=''
	switch (calculationOperator){
		case "+":
		result= parseFloat(prevNumber) + parseFloat(currentNumber)
		break
		case "-":
		result=parseFloat(prevNumber) - parseFloat(currentNumber)
		break
		case "*":
		result=parseFloat(prevNumber) * parseFloat(currentNumber)
		break
		case "/":
		result=parseFloat(prevNumber) / parseFloat(currentNumber)
		break
		case "%":
		result=parseFloat(prevNumber) /100
		break
		case "%":
		result=parseFloat(prevNumber) % parseFloat (currentNumber)
		break
		default:
		return
	}
	currentNumber=result
	calculationOperator=''
}

/* kode JS untuk button Clear */
/* lakukan pengujian dengan console.log('CLEAR button is pressed') */
const clearBtn=document.querySelector('.all-clear')

clearBtn.addEventListener('click', ()=>{
	clearAll()
	updateScreen(currentNumber)	
})


const clearAll =()=>{
	prevNumber=''
	calculationOperator=''
	currentNumber='0'
}

/* kode JS untuk Button Desimal */
/* lakukan pengujian dengan console.log(event.target.value) */
const decimal =document.querySelector('.decimal')

decimal.addEventListener('click', (event)=>{
	inputDecimal(event.target.value)
	updateScreen(currentNumber)

})


/* langkah di bawah agar titik desimal tidak berulang dan memberikan input ke button desimal */
inputDecimal=(dot)=>{
	if(currentNumber.includes('.')){
		return
	}
	currentNumber+=dot
}











