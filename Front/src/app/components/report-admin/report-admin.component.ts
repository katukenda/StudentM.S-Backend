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
  selector: 'app-report-admin',
  templateUrl: './report-admin.component.html',
  styleUrls: ['./report-admin.component.scss']
})
export class ReportAdminComponent implements OnInit {
  subject: string;
  username: string;
  options: ReportTypes[];
  attendancex:Attendance[] = [];
  attend: Attendance;
  averageAttendance: Number[] = [];
  labelArrayAttendance: string[] = [];
  attendance: boolean;
  LineChart2 = [];
  marks2: Marks[] = [];
  mark2: Marks;
  averageMarks: Number[] = [];
  javaMarks: Number[] = [];
  cMarks: Number[] = [];
  webMarks: Number[] = [];
  pythonMarks: Number[] = [];
  labelArrayEvaluate: string[] = [];
  average: boolean;
  LineChart4 = [];
  filteredOptions: Observable<ReportTypes[]>;
  myControl = new FormControl();


  constructor(private examMarksService: ExamMarksService,private attendanceService: AttendanceService) { }

  ngOnInit() {
    //if (localStorage.getItem('role') == 'Admin') {
      this.options = [        
        { name: 'Attendance' },
		{ name: 'Average marks for all the subjects' }
      ];
      
      this.subject = localStorage.getItem('subject');
      this.username = '';
      console.log("Admin" + this.username);
      console.log("Admin" + this.subject);
   // };
    this.attendanceService.getattendanceall().subscribe((res) => {
      console.log(res);
      this.attendancex = res as Attendance[];
      var total = 0;
      var total1 = 0;
      var total2 = 0;
      var total3 = 0;
      var total4 = 0;
      var total5 = 0;
      var total6 = 0;
      var total7 = 0;
      var total8 = 0;
      this.attendancex.forEach((ele) => {
        this.attend = ele as Attendance;
        var num1 = this.attend.attended_days as number;
        var num2 = this.attend.total_days as number;
        var isodate2 = new Date(this.attend.date);
        if (this.attend.course == "C") {
          total = total+num1;
          total1 = total1 + num2
          var num3 = (total) / (total1);
          console.log("num3C" + num3);
          this.averageAttendance[0] = (num3)*100;
          this.labelArrayAttendance[0] = "C";
          console.log(this.labelArrayAttendance[0]);
        }
        if (this.attend.course == "Java for Beginners") {
          total3 = total3 + num1;
          total4 = total4 + num2;
          var num4 = (total3) /(total4);
          console.log("num4java" + num4);
          this.averageAttendance[1] = ( num4)*100;
          this.labelArrayAttendance[1] = "Java for Beginners";
          console.log(this.labelArrayAttendance[1]);
        }
        if (this.attend.course == "Phython") {
          total5 = total5 + num1;
          total6 = total6 + num2;
          var num5 = (total5) /(total6);
          console.log("num3python" + num5);
          this.averageAttendance[2] = (num5)*100;
          this.labelArrayAttendance[2] = "Phython";
          console.log(this.labelArrayAttendance[2]);
        }
        if (this.attend.course == "Web Designing") {
          total7 = total7 + num1;
          total8 = total8 + num2;
          var num6 = (total7)/ (total8);
          console.log("num3C" + num6);
          this.averageAttendance[3] = (num6)*100;
          this.labelArrayAttendance[3] = "Web Designing";
          console.log(this.labelArrayAttendance[3]);
        }
        

      });
    });

    this.examMarksService.getAll().subscribe((response2) => {
      console.log("response2---------------------");
      console.log(response2);
      this.marks2 = response2 as Marks[];
      console.log("marks2---------------------");
      this.marks2.forEach((elem) => {
        this.mark2 = elem as Marks;
        console.log("this.mark2.course" + this.mark2.course);
        if (this.mark2.course == 'C') {
          console.log("----------c-----------");
          this.cMarks.push(+this.mark2.marks);
        }
        if (this.mark2.course == 'Java for Beginners') {
          console.log("----------java-----------");
          this.javaMarks.push(+this.mark2.marks);
        }
        if (this.mark2.course == 'Web Designing') {
          console.log("----------web-----------");
          this.webMarks.push(+this.mark2.marks);
        }
        if (this.mark2.course == 'Phython') {
          console.log("----------python-----------");
          this.pythonMarks.push(+this.mark2.marks);
        }
        if (this.cMarks.length !== 0) {
          var total = 0;
          this.cMarks.forEach((mrk) => {
            var m = mrk as number;
            total = total + m;
          });
          this.averageMarks[0] = (total / this.cMarks.length);
          this.labelArrayEvaluate[0] = "C";
        }
        if (this.pythonMarks.length !== 0) {
          var total1 = 0;
          this.pythonMarks.forEach((mrk1) => {
            var mm = mrk1 as number;
            total1 = total1 + mm;
          });
          this.averageMarks[1] = (total1 / this.pythonMarks.length);
          this.labelArrayEvaluate[1] = "Phython";
        }
        if (this.javaMarks.length !== 0) {
          var total2 = 0;
          this.javaMarks.forEach((mrk2) => {
            var mmm = mrk2 as number;
            total2 = total2 + mmm;
          });
          this.averageMarks[2] = (total2 / this.javaMarks.length);
          this.labelArrayEvaluate[2] = "Java for Beginners";
        }
        if (this.webMarks.length !== 0) {
          var total3 = 0;
          this.webMarks.forEach((mrk3) => {
            var mmmm = mrk3 as number;
            total3 = total3 + mmmm;
          });
          this.averageMarks[3] = (total3 / this.webMarks.length);
          this.labelArrayEvaluate[3] = "Web Designing";
        }

      });
    });
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | ReportTypes>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
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

    if (selectedReport.name === 'Attendance') {
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
      //this.LineChart2 = [];
    }
    if (selectedReport.name === 'Average marks for all the subjects') {
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

    }
  }




  

}
