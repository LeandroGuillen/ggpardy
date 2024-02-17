import { Component, Input } from '@angular/core';
import { Team } from '../team-setup/team-setup.component';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss',
})
export class TeamCardComponent {
  @Input() team!: Team;

  add() {
    this.team.score += 100;
  }

  subtract() {
    if (this.team.score <= 0) {
      return;
    }
    this.team.score -= 100;
  }
}
