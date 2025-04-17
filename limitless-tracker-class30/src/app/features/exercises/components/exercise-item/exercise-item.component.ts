import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { ExerciseService } from '../../../../shared/services/exercise.service';
import { Exercise } from '../../../../shared/models/exercise.model';
import { ExerciseStopWatchComponent } from "../exercise-stop-watch/exercise-stop-watch.component";

@Component({
  selector: 'app-exercise-item',
  imports: [ExerciseStopWatchComponent],
  templateUrl: './exercise-item.component.html',
  standalone: true,
  styleUrl: './exercise-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseItemComponent {
  private exerciseService = inject(ExerciseService);
  data = input<Exercise>();

  get debugOutput() {
    console.log('[ExerciseItemComponent] generated!');
    return ''
  }

  removeExerciseHandler() {
    this.exerciseService.removeExercise(this.data().name);
  }
}
