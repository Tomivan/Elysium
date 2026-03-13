import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from "./theme-toggle/theme-toggle.component";
import { ThemeService } from "./theme-toggle/theme.service";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ThemeToggleComponent, CommonModule],
  providers: [ThemeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elysium';
}
