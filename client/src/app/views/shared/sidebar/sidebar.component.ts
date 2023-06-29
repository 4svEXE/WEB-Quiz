import { Component } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  isActive: boolean = false; // Opened or closed sidebar

  isDarkTheme: boolean = Boolean(
    localStorage.getItem("isDarkTheme") === "true"
  );

  constructor(private themeService: ThemeService) {}

  ngOnInit() {}

  sendThemeState() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem("isDarkTheme", this.isDarkTheme.toString());

    this.themeService.setTheme(this.isDarkTheme);
  }
}
