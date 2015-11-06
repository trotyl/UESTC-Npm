export const yearDom = "<tr><td class='calendar-bar-td-blankBorder' index='0'>2008-2009</td><td class='calendar-bar-td-blankBorder' index='1'>2009-2010</td><td class='calendar-bar-td-blankBorder' index='2'>2010-2011</td></tr><tr><td class='calendar-bar-td-blankBorder' index='3'>2011-2012</td><td class='calendar-bar-td-blankBorder' index='4'>2012-2013</td><td class='calendar-bar-td-blankBorder' index='5'>2013-2014</td></tr><tr><td class='calendar-bar-td-blankBorder' index='6'>2014-2015</td><td class='calendar-bar-td-blankBorder' index='7'>2015-2016</td><td class='calendar-bar-td-blankBorder'></td><td class='calendar-bar-td-blankBorder'></td></tr><td class='calendar-bar-td-blankBorder'></td>";
 
export const termDom = "<tr><td class='calendar-bar-td-blankBorder' val='1'><span>1</span>学期</td></tr><tr><td class='calendar-bar-td-blankBorder' val='2'><span>2</span>学期</td></tr>";

export const semesters = { 
		y0: [{ id: 21, schoolYear: "2008-2009", name: "1" }, { id: 22, schoolYear: "2008-2009", name: "2" }], 
		y1: [{ id: 19, schoolYear: "2009-2010", name: "1" }, { id: 20, schoolYear: "2009-2010", name: "2" }], 
		y2: [{ id: 17, schoolYear: "2010-2011", name: "1" }, { id: 18, schoolYear: "2010-2011", name: "2" }], 
		y3: [{ id: 15, schoolYear: "2011-2012", name: "1" }, { id: 16, schoolYear: "2011-2012", name: "2" }], 
		y4: [{ id: 13, schoolYear: "2012-2013", name: "1" }, { id: 14, schoolYear: "2012-2013", name: "2" }], 
		y5: [{ id: 1, schoolYear: "2013-2014", name: "1" }, { id: 2, schoolYear: "2013-2014", name: "2" }], 
		y6: [{ id: 43, schoolYear: "2014-2015", name: "1" }, { id: 63, schoolYear: "2014-2015", name: "2" }], 
		y7: [{ id: 84, schoolYear: "2015-2016", name: "1" }, { id: 103, schoolYear: "2015-2016", name: "2" }] 
	};

export const semesterMap: { [year: number]: { [semester: number]: number } } = {
	2008: { 1: 21, 2: 22 },
	2009: { 1: 19, 2: 20 },
	2010: { 1: 17, 2: 18 },
	2011: { 1: 15, 2: 16 },
	2012: { 1: 13, 2: 14 },
	2013: { 1:  1, 2:  2 },
	2014: { 1: 43, 2: 63 },
	2015: { 1: 84, 2: 103},
	2016: {},
}
