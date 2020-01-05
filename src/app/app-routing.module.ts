import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./pages/home/home.component";
import { UsersComponent } from "./pages/users/users.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "/users", component: UsersComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
