import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExerciseService } from '../../../../shared/services/exercise.service';

@Component({
  selector: 'app-exercise-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseFormComponent implements AfterViewInit {
  private exerciseService = inject(ExerciseService)

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')

  get debugOutput() {
    console.log('[ExerciseFormComponent] generated!');
    return ''
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called: Form Element Available');

    this.form().nativeElement.addEventListener('submit', (event) => {
      console.log("Form submitted");
    })
  }

  addExerciseHandler(name: string, duration: number) {
    this.exerciseService.addExercise(name, duration)
    this.resetFormHandler()
  }

  resetFormHandler() {
    this.form().nativeElement.reset()
  }
}
