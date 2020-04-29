import { Routes, RouterModule } from "@angular/router";
import { Zad1 } from "./zad1/components/zad1.component";
import { Zad2 } from "./zad2/components/zad2.component";
import { Index } from "./index.component";

const routes: Routes = 
[
    {path: "", component: Index},
    {path: "1", component: Zad1},   // Part 1
    {path: "2", component: Zad2}    // Part 2
]
export const RoutingConfig = RouterModule.forRoot(routes);