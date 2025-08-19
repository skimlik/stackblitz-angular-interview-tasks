import { Routes } from "@angular/router";
import { Task1Component } from "./task1/task1.component";

export const routes: Routes = [
    {
        path: 'task1',
        component: Task1Component,
        pathMatch: 'full'
    }
];