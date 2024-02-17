import { RouterOutlet } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { categories } from './questions';
import { Question } from './model';
import {
  Observable,
  Subscribable,
  Subscription,
  interval,
  takeWhile,
} from 'rxjs';
import { Team } from './team-setup/team-setup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // data
  categories = categories;
  selectedQuestion: Question | null = null;
  selectedCategory: string = '';
  teams: Team[] = [];

  // timing
  timer: number = 30;
  timerObservable!: Subscription;
  private readonly DEFAULT_TIMER = 60;

  // flags
  timeUp = false;
  questionClicked: boolean = false;
  isAnswerShown = false;

  ngOnInit(): void {
    // this.selectQuestion(this.categories[0].questions[1]);
    this.teamCountUpdate([
      {
        name: 'Mami',
        score: 0,
        color: '',
      },
      {
        name: 'Leandro',
        score: 0,
        color: '',
      },
      {
        name: 'Elisa',
        score: 0,
        color: '',
      },
      {
        name: 'Jazmín',
        score: 0,
        color: '',
      },
      {
        name: 'Natán',
        score: 0,
        color: '',
      },
    ]);
  }

  teamCountUpdate(teams: Team[]) {
    console.log(teams);
    this.teams = teams;
  }

  selectQuestion(question: Question) {
    this.unselectAll();
    this.selectedQuestion = question;
    this.selectedCategory =
      categories.find(
        (cat) =>
          !!cat.questions.find(
            (q) => q.question === question.question && q.value && question.value
          )
      )?.name || '';

    question.isSelected = true;
    this.questionClicked = true;
    setTimeout(() => (this.questionClicked = false), 300); // Reset after the duration of the animation
    this.startTimer(question.time || this.DEFAULT_TIMER);
  }

  unselectAll() {
    for (const c of categories) {
      for (const q of c.questions) {
        q.isSelected = false;
      }
    }
    this.selectedQuestion = null;
    this.timerObservable?.unsubscribe();
    this.isAnswerShown = false;
    this.timeUp = false;
  }

  startTimer(time: number) {
    this.timer = time; // Set the timer to the provided time
    this.timerObservable = interval(1000)
      .pipe(takeWhile(() => this.timer > 0))
      .subscribe({
        next: () => this.timer--,
        error: () => {},
        complete: () => {
          this.timeUp = true;
        },
      });
  }

  showAnswer() {
    this.isAnswerShown = true;
    if (this.selectedQuestion === null) {
      return;
    }
    this.selectedQuestion.isAnswered = true;
  }
}
