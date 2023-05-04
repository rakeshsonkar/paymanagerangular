import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/service.service'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  canvas: any;
  ctx: any;
  Reqpen: any;
  DuePay: any;
  ExpSal: any;
  UpEvent: any;
  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };

  pieChart: any;
  @ViewChild('barCanvas') barCanvas!:{ nativeElement: any };
  barChart: any;
  @ViewChild('lineCanvas') lineCanvas!: { nativeElement: any };
  lineChart: any;

  constructor(private http: HttpClient,private router: Router, private apiService: ServiceService,) {}
  ngOnInit(): void {
    // For PendingRequest
    this.apiService.pendingRequest().subscribe(res => {
        this.Reqpen = res;
    }) 
    // For DuePayment
    this.apiService.duePayment().subscribe(res => {
      this.DuePay = res;
  }) 
  // for Expected Salary
  this.apiService.expectedSalary().subscribe(res => {
    this.ExpSal = res;
}) 
// For UpcomingEvent
this.apiService.upcomingEvent().subscribe(res => {
  this.UpEvent = res;
})
    
  }

  ngAfterViewInit(): void {
    this.pieChartBrowser();
    this.barChartMethod();
    this.lineChartMethod();
  }

  pieChartBrowser(): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    

    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ['Apple', 'Google', 'Facebook', 'Infosys', 'Hp', 'Accenture'],
        datasets: [
          {
            backgroundColor: [
              '#2ecc71',
              '#3498db',
              '#95a5a6',
              '#9b59b6',
              '#f1c40f',
              '#e74c3c',
            ],
            data: [12, 19, 3, 17, 28, 24],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio:2.01
      }
    }); 
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Raj', 'UP', 'MP', 'AP', 'Dehli', 'Mumbai'],
        datasets: [
          {
            label: '# of Population',
            data: [230, 500, 350, 150, 210, 340],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }


  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Sell per week',
          //  lineTension: 0.2, 
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
            spanGaps: false,
          },
        ],
      },
    });
  }
}

