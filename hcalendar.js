/**
 * This file was a part of Respire,
 * but now it is not.
 */

var Calendar = {
	today: function (format) {
		var d = new Date();
		var day = d.getDate();
		var month = d.getMonth();
		var year = d.getFullYear();
		var ru = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
			'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
		
		// Month: Verbal output
		if (format === 'ru') {
			month = ru[month];
			return day + ' ' + month + ' ' + year;
		}
		
		// Month: Numeric output
		month = month + 1;
		if (month < 10) {
			month = '0' + month;
		}
		if (format === 'ja') {
			return year + '年' + month + '月' + day + '日';
		}
		if (format === '.') {
			return day + '.' + month + '.' + year;
		}
		if (format === 'r') {
			return year + '.' + month + '.' + day;
		}
		if (format === 'r.') {
			return year + '.' + month + '.' + day;
		}
		if (format === 'r-') {
			return year + '-' + month + '-' + day;
		}
		if (format === 'r/') {
			return year + '/' + month + '/' + day;
		}
		if (format === 'a/') {
			return month + '/' + day + '/' + year;
		}
		return day + '.' + month + '.' + year;
	},
	isValid: function (dateString) {
		
	},
	prev: function (dateString) {
		
	},
	print: function (dateString, format) {
		// Should act like .today(format) for any dateString given.
		// TODO: .today(format) -> .print("today", format)
		// TODO: Remove 'today' function?
		// C$.print('today').format('r') ?
		// C$('today').f('r') ?
		// C$.prev('2016-09-29').f('r') ?
	},
	next: function (dateString) {
		
	},
	shift: function (dateString, offset) {
		
	},
	left: function (dateString) {
		
	}
};
