/**
 * HCalendar by Serguey Arsentev: http://github.com/einse/hcalendar
 * 
 * This file was a part of Respire (http://github.com/einse/respire),
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
// TODO:
// 1. Add C$, HC$ shortcuts?
// 2. Global var or 'window'/'document' method?
// TODO: Presumable examples of using:
// C$('1900-02-29') -> should return empty string, as the date not valid
// C$('2000-02-29') -> should return '2000-02-29'
// C$('2000-02-29', '') -> should return '29.02.2000'
// C$('2000-02-29', '.') -> should return the same as previous one
// C$('2000-02-29', 'r') -> should return '2000.02.29'
// C$('2000-02-29', 'r.') -> should return the same as previous one
// C$('2000-02-29', '/') -> should return '29/02/2000'
// C$('2000-02-29', 'a/') -> should return '02/29/2000'
// C$('2000-02-29', 'r/') -> should return '2000/02/29'
// C$('2000-02-29', 'r/2') -> should return '02/29'
// C$('2000-02-29', 'sr/2') -> should return '2/29'
// C$('2000-02-29', 'sr2') -> should return '2.29'
// C$('2000-02-29', 's2') -> should return '29.2'
// C$('2000-02-29', '2') -> should return '29.02'
// C$('2000-02-29', 2) -> should return the same as previous one
// C$('2000-02-29', 1) or C$('2000-02-29', '1') -> should return '29'
// C$('2000-02-29', ' ') -> should return '29 02 2000'
// C$('2000-02-29', 't ') -> should return '29 02 00'
// C$('2000-02-29', 't') -> should return '29.02.00'
// C$('2000-02-29', 'r.2') -> should return '02.29'
// C$('2000-02-29', 'r-2') -> should return '02-29'
// C$('2000-02-29', '/2') -> should return '29/02'
// C$('2000-02-29', '.2') -> should return '29/02'
// C$('2000-02-29', '-2') -> should return '29-02'
// C$('2000-02-29', '2') -> should return '29/02'
// C$('2000-02') -> ...
// C$('2000-02', 'ru') -> ...
// C$('2000') -> ...
// C$.weekday('2000-03-01') -> 'Wed' or '3'?
// TODO: Also to learn: 
// https://en.wikipedia.org/wiki/Date_format_by_country
// https://en.wikipedia.org/wiki/ISO_8601
// https://en.wikipedia.org/wiki/Date_and_time_representation_by_country
// 
// Posted 30.09.2016
