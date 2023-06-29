import { Component } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { UserModel } from "./../../../models/User";
import { NotificationService } from "src/app/services/notification.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  user = new UserModel("", "", "", "");

  constructor(
    private loginService: LoginService,
    private notifyService: NotificationService
  ) {}

  setFirstName(firstName: string) {
    this.user.firstName = firstName;
  }

  setLastName(lastName: string) {
    this.user.lastName = lastName;
  }

  setEmail(email: string) {
    this.user.email = email;
    this.user.login = email;
  }

  setPassword(password: string) {
    this.user.password = password;
  }

  registerUser(event: any) {
    event.preventDefault();

    if (
      this.user.firstName.length >= 3 &&
      this.user.lastName.length > 3 &&
      this.user.email.length > 3 &&
      this.user.password.length > 3
    ) {
      this.loginService.registerUser(this.user).subscribe((res) => {
        const message = `User ${
          this.user.firstName +" "+ this.user.lastName
        } successfully registered!`;
        console.log('res :>> ', res);
        this.notifyService.showSuccess(message, "Succes");
      });
    } else {
      const message = "All fields must be at least 3 characters long.";
      this.notifyService.showError(message, "Warning");
    }
  }
}
