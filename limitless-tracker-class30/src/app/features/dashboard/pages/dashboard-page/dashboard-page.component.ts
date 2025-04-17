import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExerciseListComponent } from '../../../exercises/components/exercise-list/exercise-list.component';


@Component({
  selector: 'app-dashboard-page',
  imports: [ExerciseListComponent],
  standalone: true,
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent {

  get debugOutput() {
    console.log('[DashboardPageComponent] generated!');
    return ''
  }
}
