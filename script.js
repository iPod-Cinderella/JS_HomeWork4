num = {
	radNumber: function(number) {
		if(isNaN (number) || number < 0 || number > 999)
			console.log('Введено неверное число');
		else {
			this.hundreds = (number -  (number % 100)) / 100;
			console.log('сотни ' + this.hundreds);
			this.tens = ((number - this.hundreds * 100) -  ((number - this.hundreds * 100) % 10)) / 10;
			console.log('десятки' + this.tens);
			this.units = number - this.tens * 10 - this.hundreds * 100;
			console.log('единицы' + this.units);
		}
	}
}
num.radNumber(prompt('Введите число от 0 до 999'));
