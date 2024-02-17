import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TeamSetupComponent } from './team-setup/team-setup.component';
import { TeamCardComponent } from './team-card/team-card.component';

@NgModule({
  declarations: [AppComponent, TeamSetupComponent, TeamCardComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
