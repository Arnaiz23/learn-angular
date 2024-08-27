import { Routes } from "@angular/router";

import { CharacterPageComponent } from "./character-page/character-page.component";
import { CharactersPageComponent } from "./characters-page/characters-page.component";

export const routes: Routes = [
  { path: "", component: CharactersPageComponent },
  { path: ":id", component: CharacterPageComponent },
];
