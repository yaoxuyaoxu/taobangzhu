import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'AfterTest',
  templateUrl: './AfterclassTest.component.html',
  styleUrls: ['./AfterclassTest.component.less'],
})
export class AfterclassTestComponent implements OnInit {
  question: any;
  answer: any;
  UserChoose: any;
  clicked = [ ];
  UserClicked = {};
  junior: boolean = true;
  middle: boolean = false;
  senior: boolean = false;
  right: boolean = false;

  constructor(
    private http: HttpClient,
  ) {}

  tabs = [
    {
      active: true,
      name  : '新手测试',
      icon  : 'anticon anticon-form',
      type : 'JUNIOR'
    },
    {
      active: false,
      name  : '进阶测试',
      icon  : 'anticon anticon-bar-chart',
      type : 'INTERMEDIATE'
    },
    {
      active: false,
      name  : '精英测试',
      icon  : 'anticon anticon-schedule',
      type : 'SENIOR'
    }
  ];
  testJunior(testType) {
    const courseSelectsub = new HttpParams().set('category.equals', testType ).set('size', '10');
    this.http.get('/api/questions', { params: courseSelectsub }).subscribe(res => {
        this.question = res;
      },
      err => {
        console.log(err);
      });
  }
  valuecnt = [];
  SingleClick(index, SingleClicked, current) {
    // if (this.clicked[index] ==) {
    //
    // }


    this.clicked[index] = SingleClicked;
    console.log( this.clicked);
    console.log(15);

    // this.clicked.push( SingleClicked, );
  }
  UserClick(UserAnswers) {
    this.http.post('/api/questions/answers',
     UserAnswers, { responseType: 'text'}
    ).subscribe(reses => {
        this.UserChoose = reses;
      },
      err => {
        console.log(err);
      });

  }
  log(value: string[], current, index): void {
    const choose = new HttpParams().set('id.equals', current );
    this.http.get('/api/questions', { params: choose }).subscribe(res => {
      this.answer = res;
      console.log(78);
      console.log( this.answer[0].options );
    });
    console.log(value)
      // this.UserClicked[index] = this.answer;


      // console.log( this.answer[0].options );
      // console.log(14);

      // for (let i = 0; i < this.answer[0].options.length; i++) {
      //   const valueString = value[i];
      //   if (valueString == 'true' ) {
      //     this.right = true;
      //   }
      //
      //
      // }
      // for (let j = 0; j < this.answer[0].options.length - 1 ; j++) {
      //   this.valuecnt.push(value[j]);
      //   // console.log(this.valuecnt);
      //   // console.log(this.answer.options.title.length);
      //   for (let n = 0; n < this.valuecnt.length; n++ ){
      //     if (this.valuecnt[n] === true) {
      //
      //       console.log(1);
      //     }
      //     console.log(this.valuecnt);
      //     }
      // }



  }
  ngOnInit() {
    const testDefault = new HttpParams().set('category.equals', 'JUNIOR' ).set('size', '10');
    this.http.get('/api/questions', { params: testDefault }).subscribe(res => {
        this.question = res;
      },
      err => {
        console.log(err);
      });
  }
}
