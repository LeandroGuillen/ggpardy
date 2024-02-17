import { Component, EventEmitter, Output } from '@angular/core';

export type Team = {
  name: string;
  score: number;
  color: string;
};

@Component({
  selector: 'app-team-setup',
  templateUrl: './team-setup.component.html',
  styleUrl: './team-setup.component.scss',
})
export class TeamSetupComponent {
  @Output() teamCount = new EventEmitter<Team[]>();

  selectTeams(teamCount: number) {
    const teams: Team[] = [];
    for (let i = 0; i < teamCount; i++) {
      teams.push({
        name: 'Equipo' + (i + 1),
        score: 0,
        color: '',
      });
    }
    this.teamCount.next(teams);
  }
}
