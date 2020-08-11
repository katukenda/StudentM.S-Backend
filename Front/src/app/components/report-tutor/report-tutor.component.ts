import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FormsModule, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ExamMarksService } from '../../services/exam-marks.service';
import { Marks } from '../../../app/shared/marks.model';
import { AttendanceService } from '../../services/attendance.service';
import { Attendance } from 'src/app/shared/attendance.model';

export interface ReportTypes {
  name: string;
}

@Component({
  selector: 'app-report-tutor',
  templateUrl: './report-tutor.component.html',
  styleUrls: ['./report-tutor.component.scss']
})
export class ReportTutorComponent implements OnInit {
  selected = null;
  chart = [];
  title = 'Ng7ChartJs By DotNet Techy';
  LineChart1 = [];
  LineChart2 = [];
  LineChart3 = [];
  LineChart4 = [];
  myControl = new FormControl();
  options: ReportTypes[];
  marksx: boolean;
  attendance: boolean;
  evaluatex: boolean;
  average: boolean;

  marksButton: boolean;
  attendanceButton: boolean;
  evaluateButton: boolean;
  averageButton: boolean;

  filteredOptions: Observable<ReportTypes[]>;
  checker = false;
  marks: Marks[] = [];
  marks2: Marks[] = [];
  //attendancex: Attendance[] = [];
  labelArray: string[] = [];
  //labelArrayAttendance: string[] = [];
  //labelArrayEvaluate: string[] = [];
  marksArray: Number[] = [];
  marksArray_z: Number[] = [];
  marksInNo: Number[] = [];
  marksBelowThirtyFive: Number[] = [];
  marksBelowFiftyFive: Number[] = [];
  marksBelowSixtyFive: Number[] = [];
  marksBelowseventyFive: Number[] = [];
  marksAboveSeventyFive: Number[] = [];
  mark: Marks; 
  averageMarks: Number[] = [];  

  subject: string;
  username: string;
  




  constructor(private examMarksService: ExamMarksService, private attendanceService: AttendanceService) { }

  ngOnInit() {
    // document.getElementById("select").style.visibility="visible";
    /* if (localStorage.getItem('role') == 'Student') {
      this.options = [
        { name: 'Marks' },
        { name: 'Attendance' },
        { name: 'Evaluate' },
        { name: 'Average marks for all the subjects' }

      ];
      this.subject = localStorage.getItem('subject');
      this.username = localStorage.getItem('username');
      console.log("Student" + this.username);
      console.log("Student" + this.subject);
    }; */

    if (localStorage.getItem('role') == 'Teacher') {
      this.options = [
        { name: 'Evaluate' },
        { name: 'Marks' }
      ];
      this.subject = localStorage.getItem('subject');
      this.username = '';
      //this.username = localStorage.getItem('username');
      console.log("Teacher" + this.username);
      console.log("Teacher" + this.subject);
    };

    /* if (localStorage.getItem('role') == 'Admin') {
      this.options = [
        { name: 'Marks' },
        { name: 'Attendance' },
        { name: 'Evaluate' },
        { name: 'Average marks for all the subjects' }
      ];
      this.subject = localStorage.getItem('subject');
      this.username = '';
      console.log("Admin" + this.username);
      console.log("Admin" + this.subject);
    }; */

    this.examMarksService.getAllMarksList(this.subject, this.username).subscribe((response) => {
      console.log(response);
      this.marks = response as Marks[];
      this.marks.forEach(mark => {
        this.mark = mark as Marks;
        var total =0;
        var total1 =0;
        var total2 =0;
        var total3 =0;
        var total4 =0;
        var total5 =0;
        var total6 =0;
        var total7 =0;
        var total8 =0;
        var total9 =0;
        var total10 =0;
        var total11 =0;
        var i =0;
        var i1 =0;
        var i2 =0;
        var i3 =0;
        var i4 =0;
        var i5 =0;
        var i6 =0;
        var i7 =0;
        var i8 =0;
        var i9 =0;
        var i10 =0;
        var i11 =0;
        //var total =0;
        var isodate = new Date(this.mark.date);
        if (isodate != null && (this.mark.marks != null) && (isodate.getMonth() + 1) === 1) {
          this.marksInNo[0] = parseInt(this.mark.marks.toString(), 10);
          // console.log(this.marksInNo[0]);  
          i=i+1;        
          total = total +(+this.mark.marks);
          this.marksArray[0] = total/i;
          this.labelArray[0] = "January";
        }
        if (isodate != null && (this.mark.marks != null) && (isodate.getMonth() + 1) === 2) {
          this.marksInNo[1] = parseInt(this.mark.marks.toString(), 10);
          //console.log(this.marksInNo[1]);
          i1=i1+1;        
          total1 = total1 +(+this.mark.marks);
          this.marksArray[1] = total1/i1;
          this.labelArray[1] = "February";
        }
        if (isodate != null && (this.mark.marks != null) && (isodate.getMonth() + 1) === 3) {
          this.marksInNo[2] = parseInt(this.mark.marks.toString(), 10);
          //console.log(this.marksInNo[2]);
          i2=i2+1;        
          total2 = total2 +(+this.mark.marks);
          this.marksArray[2] = total2/i2;
          this.labelArray[2] = "March";
        }
        if (isodate != null && (this.mark.marks != null) && (isodate.getMonth() + 1) === 4) {
          this.marksInNo[3] = parseInt(this.mark.marks.toString(), 10);
          //console.log(this.marksInNo[3]);
          i3=i3+1;        
          total3 = total3 +(+this.mark.marks);
          this.marksArray[3] = total3/i3;
          this.labelArray[3] = "April";
        }
        if (isodate != null && (this.mark.marks != null) && (isodate.getMonth() + 1) === 5) {
          this.marksInNo[4] = parseInt(this.mark.marks.toString(), 10);
          //console.log(this.marksInNo[4]);
          i4=i4+1;        
          total4 = total4 +(+this.mark.marks);
          this.marksArray[4] = total4/i4;
          this.labelArray[4] = "May";
        }
        if (isodate != null && (this.mark.marks != null) && (isodate.getMonth() + 1) === 6) {
          this.marksInNo[5] = parseInt(this.mark.marks.toString(), 10);
          //console.log(this.marksInNo[5]);
          i5=i5+1;        
          total5 = total5 +(+this.mark.marks);
          this.marksArray[5] = total5/i5;
          this.labelArray[5] = "June";
        }
        if (isodate != null && (this.mark.marks != null) && (isodate.getMonth() + 1) === 7) {
          this.marksInNo[6] = parseInt(this.mark.marks.toString(), 10);
          //console.log(this.marksInNo[6]);
          i6=i6+1;        
          total6 = total6+(+this.mark.marks);
          this.marksArray[6] = total6/i6;
          this.labelArray[6] = "July";
        }
        if (isodate != null && (this.mark.marks != null) && (isodate.getMonth() + 1) === 8) {
          this.marksInNo[7] = parseInt(this.mark.marks.toString(), 10);
          //console.log(this.marksInNo[7]);
          i7=i7+1;        
          total7 = total7 +(+this.mark.marks);
          this.marksArray[7] = total7/i7;
          this.labelArray[7] = "August";
        }
        if (isodate != null && (this.mark.marks != null) && (isodate.getMonth() + 1) === 9) {
          this.marksInNo[8] = parseInt(this.mark.marks.toString(), 10);
          //console.log(this.marksInNo[8]);
          i8=i8+1;        
          total8 = total8 +(+this.mark.marks);
          this.marksArray[8] = total8/i8;
          this.labelArray[8] = "September";
        }
        if (isodate != null && (this.mark.marks != null) && (isodate.getMonth() + 1) === 10) {
          this.marksInNo[9] = parseInt(this.mark.marks.toString(), 10);
          //console.log(this.marksInNo[9]);
          i9=i9+1;        
          total9 = total9 +(+this.mark.marks);
          this.marksArray[9] = total9/i9;
          this.labelArray[9] = "Octomber";
        }
        if (isodate != null && (this.mark.marks != null) && (isodate.getMonth() + 1) === 11) {
          this.marksInNo[10] = parseInt(this.mark.marks.toString(), 10);
          //console.log(this.marksInNo[10]);
          i10=i10+1;        
          total10 = total10 +(+this.mark.marks);
          this.marksArray[10] = total10/i10;
          this.labelArray[10] = "November";
        }
        if (isodate != null && (this.mark.marks != null) && (isodate.getMonth() + 1) === 12) {
          this.marksInNo[11] = parseInt(this.mark.marks.toString(), 10);
          //console.log(this.marksInNo[11]);
          i11=i11+1;        
          total11 = total11 +(+this.mark.marks);
          this.marksArray[11] = total11/i11;
          this.labelArray[11] = "December";
        }
        //console.log(this.labelArray[8]);

      });
      this.evaluate(this.marksInNo);
    });

   /*  this.attendanceService.getStudentAttendanceByusername(this.username).subscribe((res) => {
      console.log(res);
      this.attendancex = res as Attendance[];
      this.attendancex.forEach((ele) => {
        this.attend = ele as Attendance;
        var num1 = this.attend.attended_days as number;
        var num2 = this.attend.total_days as number;
        var isodate2 = new Date(this.attend.date);
        if (isodate2 != null && (num1 != null) && (num2 != null) && (isodate2.getMonth() + 1) === 1) {
          var num3 = num1 / num2;
          console.log("num3" + num3);
          this.averageAttendance[0] = num3;
          this.labelArrayAttendance[0] = "January";
          console.log(this.labelArrayAttendance[0]);
        }
        if (isodate2 != null && (num1 != null) && (num2 != null) && (isodate2.getMonth() + 1) === 2) {
          var num4 = num1 / num2;
          console.log("num4" + num4);
          this.averageAttendance[1] = num4;
          this.labelArrayAttendance[1] = "February";
          console.log(this.labelArrayAttendance[1]);
        }
        if (isodate2 != null && (num1 != null) && (num2 != null) && (isodate2.getMonth() + 1) === 3) {
          var num5 = num1 / num2;
          console.log("num5" + num5);
          this.averageAttendance[2] = num5;
          this.labelArrayAttendance[2] = "March";
          console.log(this.labelArrayAttendance[2]);
        }
        if (isodate2 != null && (num1 != null) && (num2 != null) && (isodate2.getMonth() + 1) === 4) {
          var num6 = num1 / num2;
          console.log("num5" + num6);
          this.averageAttendance[3] = num6;
          this.labelArrayAttendance[3] = "April";
          console.log(this.labelArrayAttendance[3]);
        }
        if (isodate2 != null && (num1 != null) && (num2 != null) && (isodate2.getMonth() + 1) === 5) {
          var num7 = num1 / num2;
          console.log("num5" + num5);
          this.averageAttendance[4] = num7;
          this.labelArrayAttendance[4] = "May";
          console.log(this.labelArrayAttendance[4]);
        }
        if (isodate2 != null && (num1 != null) && (num2 != null) && (isodate2.getMonth() + 1) === 6) {
          var num8 = num1 / num2;
          console.log("num5" + num8);
          this.averageAttendance[5] = num8;
          this.labelArrayAttendance[5] = "June";
          console.log(this.labelArrayAttendance[5]);
        }
        if (isodate2 != null && (num1 != null) && (num2 != null) && (isodate2.getMonth() + 1) === 7) {
          var num9 = num1 / num2;
          console.log("num5" + num9);
          this.averageAttendance[6] = num9;
          this.labelArrayAttendance[6] = "July";
          console.log(this.labelArrayAttendance[6]);
        }
        if (isodate2 != null && (num1 != null) && (num2 != null) && (isodate2.getMonth() + 1) === 8) {
          var num10 = num1 / num2;
          console.log("num5" + num10);
          this.averageAttendance[7] = num10;
          this.labelArrayAttendance[7] = "August";
          console.log(this.labelArrayAttendance[7]);
        }
        if (isodate2 != null && (num1 != null) && (num2 != null) && (isodate2.getMonth() + 1) === 9) {
          var num11 = num1 / num2;
          console.log("num5" + num11);
          this.averageAttendance[8] = num11;
          this.labelArrayAttendance[8] = "September";
          console.log(this.labelArrayAttendance[8]);
        }
        if (isodate2 != null && (num1 != null) && (num2 != null) && (isodate2.getMonth() + 1) === 10) {
          var num12 = num1 / num2;
          console.log("num5" + num12);
          this.averageAttendance[9] = num12;
          this.labelArrayAttendance[9] = "October";
          console.log(this.labelArrayAttendance[9]);
        }
        if (isodate2 != null && (num1 != null) && (num2 != null) && (isodate2.getMonth() + 1) === 11) {
          var num13 = num1 / num2;
          console.log("num5" + num13);
          this.averageAttendance[10] = num13;
          this.labelArrayAttendance[10] = "Novermberr";
          console.log(this.labelArrayAttendance[10]);
        }
        if (isodate2 != null && (num1 != null) && (num2 != null) && (isodate2.getMonth() + 1) === 12) {
          var num14 = num1 / num2;
          console.log("num5" + num14);
          this.averageAttendance[11] = num14;
          this.labelArrayAttendance[11] = "December";
          console.log(this.labelArrayAttendance[11]);
        }

      });
    }); */

   /*  this.examMarksService.getAllMarksList(this.subject,'').subscribe((response2) => {
      console.log("response2---------------------");
      console.log(response2);
      this.marks2 = response2 as Marks[];
      console.log("marks2---------------------");      
      this.marks2.forEach((elem) => {
        this.mark2 = elem as Marks;
        console.log("this.mark2.course"+this.mark2.course);
        if (this.mark2.course == 'C') {
          console.log("----------c-----------");
          this.cMarks.push(+this.mark2.marks);
        }
        if (this.mark2.course == 'javaforbeginners') {
          console.log("----------java-----------");
          this.javaMarks.push(+this.mark2.marks);
        }
        if (this.mark2.course == 'webdesign') {
          console.log("----------web-----------");
          this.webMarks.push(+this.mark2.marks);
        }
        if (this.mark2.course =='python') {
          console.log("----------python-----------");
          this.pythonMarks.push(+this.mark2.marks);
        }
        if (this.cMarks.length !== 0) {
          var total = 0;
          this.cMarks.forEach((mrk) => {
            var m = mrk as number;
            total = total + m;
          });
          this.averageMarks[0] = (total/this.cMarks.length);
          this.labelArrayEvaluate[0] = "C";
        }
        if (this.pythonMarks.length !== 0) {
          var total1 = 0;
          this.pythonMarks.forEach((mrk1) => {
            var mm = mrk1 as number;
            total1 = total1 + mm;
          });
          this.averageMarks[1] = (total1/this.pythonMarks.length);
          this.labelArrayEvaluate[1] = "Python";
        }
        if (this.javaMarks.length !== 0) {
          var total2 = 0;
          this.javaMarks.forEach((mrk2) => {
            var mmm = mrk2 as number;
            total2 = total2 + mmm;
          });
          this.averageMarks[2] = (total2/this.javaMarks.length);
          this.labelArrayEvaluate[2] = "Java";
        }
        if (this.webMarks.length !== 0) {
          var total3 = 0;
          this.webMarks.forEach((mrk3) => {
            var mmmm = mrk3 as number;
            total3 = total3 + mmmm;
          });
          this.averageMarks[3] = (total3/this.webMarks.length);
          this.labelArrayEvaluate[3] = "Web";
        }

      });
    }); */


    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | ReportTypes>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    // console.log(this.selected);

  }

  displayFn(user?: ReportTypes): string | undefined {
    return user ? user.name : undefined;
  }
  private _filter(name: string): ReportTypes[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  public getReports(report) {
    var selectedReport = null;
    this.options.forEach((el) => {
      if (el === report) {
        selectedReport = el;
        console.log(selectedReport);
      }

    });

    if (selectedReport.name === 'Marks') {
      console.log('I am inside marks select');
      this.marksx = true;
      this.LineChart1 = new Chart('lineChart1', {
        type: 'line',
        data: {
          // labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
          labels: this.labelArray,

          datasets: [{
            label: 'Monthly asssignment marks',
            //data: [90,70 , 30, 50, 20, 10,15,16,19,30,10,90],
            // data: [11,10.75 , 10.25],
            data: this.marksArray,
            fill: false,
            lineTension: 0.2,
            borderColor: "#009688",
            borderWidth: 1
          }]
        },
        options: {
          title: {
            text: "Results",
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          events: ['click']
        }
      });
      this.LineChart1 = [];

    }
    /* if (selectedReport.name === 'Attendance') {
      console.log('I am inside barchart select select');
      this.attendance = true;
      this.LineChart2 = new Chart('lineChart1', {
        type: 'bar',
        data: {
          // labels: ["1stWeek", "2ndWeek", "3rdWeek", "4thWeek", "5thWeek", "6thWeek"],
          labels: this.labelArrayAttendance,
          //labels: ["Jan", "Feb", "March"],
          datasets: [{
            label: 'Attendance for previous months',
            //data: [9.7,7.2 , 3.5, 5.5, 2.5, 10.5],
            //data: [11,10.75 , 10.25],
            data: this.averageAttendance,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          title: {
            text: "Attendance",
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          events: ['click']
        }
      });
      this.LineChart2 = [];
    } */
    console.log(selectedReport.name);
    if (selectedReport.name === 'Evaluate') {
      console.log('I am inside piechart select select');
      // pie chart:
      this.evaluatex = true;
      this.LineChart3 = new Chart('lineChart1', {
        type: 'pie',
        data: {
          //labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          labels: ["Below Thirty Five", "Below Fifty five", "Below Sixty Five", "Below seventy Five", "Above Seventy"],
          datasets: [{
            label: 'The percentage of the grades that you have earned',
            //data: [9,7 , 3, 5, 2, 10],
            data: [this.marksBelowThirtyFive.length, this.marksBelowFiftyFive.length, this.marksBelowSixtyFive.length, this.marksBelowseventyFive, this.marksAboveSeventyFive.length],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 192, 192, 0.2)',
              ' rgba(153, 102, 255, 0.2)'
              //'rgba(153, 102, 255, 0.2)'
              //'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
              //'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          title: {
            text: "The percentage of the grades that you have earned",
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          events: ['click']
        }
      });
      this.LineChart3 = [];
    }
    /* if (selectedReport.name === 'Average marks for all the subjects') {
      console.log('I am inside While all subjects averagesselect');
      this.average = true;
      this.LineChart4 = new Chart('lineChart1', {
        type: 'bar',
        data: {
         // labels: ["C", "Java Programming", "Web Development", "Python", "Graphic Design"],
         labels: this.labelArrayEvaluate,
          datasets: [{
            label: 'Average marks for all the subjects',
            //data: [75, 70, 30, 55, 28, 86],
            data: this.averageMarks,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
              //'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
              //'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          title: {
            text: "Averages",
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          events: ['click']
        }
      });
      this.LineChart4 = [];

    } */
  }
  private evaluate(evlarray: Number[]) {
    evlarray.forEach((element) => {
      if (element < 35) {
        this.marksBelowThirtyFive.push(element);
        //console.log(element );
      } else if ((element >= 35) && (element < 55)) {
        this.marksBelowFiftyFive.push(element);
        // console.log(element );
      } else if ((element >= 55) && (element < 65)) {
        this.marksBelowSixtyFive.push(element);
        //console.log(element );
      } else if ((element >= 65) && (element < 75)) {
        this.marksBelowseventyFive.push(element);
        //console.log(element );
      } else if ((element >= 75)) {
        this.marksAboveSeventyFive.push(element);
        console.log(element);
      }

    });
  }

}





