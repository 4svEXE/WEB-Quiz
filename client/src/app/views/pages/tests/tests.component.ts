import { Component } from "@angular/core";
import { fakeTest } from "src/app/db/fakeTest";
import { TestModel } from "src/app/models/Test";
import { SettingsWidgetService } from "src/app/services/settings-widget.service";
import { TestService } from "src/app/services/test.service";

type questionType = {
  isActive: boolean;
  isCorrect: boolean;
};

@Component({
  selector: "app-tests",
  templateUrl: "./tests.component.html",
  styleUrls: ["./tests.component.scss"],
})
export class TestsComponent {
  tests: TestModel[] = [fakeTest];
  currentQuestion: number = 0;
  config: ConfigType = {
    testSize: 20, // 10,15,20
    difficulty: 1, // 1,2,3
    rightAnswers: 0, // 0-20
  };

  constructor(
    private testService: TestService,
    private settingsWidgetService: SettingsWidgetService
  ) {
    this.settingsWidgetService.data$.subscribe((data) => {
      this.config = data;
    });
  }

  ngOnInit() {
    this.getTests();
  }

  question: questionType = { isActive: false, isCorrect: false };
  questions: questionType[] = [this.question];

  getTests() {
    this.testService.getTestQuestions().subscribe((tests: any) => {
      if (tests[0] !== undefined) {
        this.tests = tests.filter((t: any) => {
          return t.difficulty === this.config.difficulty;
        });

        // Randomize the tests 
        this.tests = this.randomizeTests(this.tests)
        console.log('this.tests :>> ', this.tests);

        for (let i = 0; i < this.config.testSize-1; i++) {
          let testsCopy = Object.assign({}, this.question);
          this.questions.push(testsCopy);
        }

        this.questions[0].isActive = true;
      }
    });
  }

  randomizeTests(array: TestModel[]): TestModel[] {
    const randomNums: number[] = this.getRandomIndexes(
      this.config.testSize
    );
    let tempArray: TestModel[] = [];

    for (let i = 0; i < this.config.testSize; i++) {
      tempArray[i] = array[randomNums[i]];
    }

    return tempArray;
  }

  // create array with random numbers from 0 to 'size'
  getRandomIndexes(size: number): number[] {
    let result = new Set<number>();
    const rand = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min) + min);
    };

    while (result.size < size + 1) {
      result.add(rand(0, size + 1));
    }

    return Array.from(result);
  }

  nextQuestion(isCorrect: boolean) {
    if (this.currentQuestion + 1 < this.tests.length) {
      this.questions[this.currentQuestion].isCorrect = isCorrect;

      this.questions[this.currentQuestion++].isActive = false;
      this.questions[this.currentQuestion].isActive = true;
    } else {
      console.log('questions :>> ', this.questions);
      console.log('tests :>> ', this.tests);
      alert("Test ends");
    }
  }
}

type ConfigType = {
  testSize: number; // 10,15,20
  difficulty: number; // 1,2,3
  rightAnswers: number; // 0-20
};
