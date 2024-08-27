import { Component, inject } from "@angular/core";

import { CharacterCardComponent } from "../character-card/character-card.component";
import { CharacterService } from "../character.service";
import { Character as CharacterInterface } from "../../types";

@Component({
  selector: "app-characters-page",
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: "./characters-page.component.html",
  styleUrl: "./characters-page.component.css",
})
export class CharactersPageComponent {
  isLoading: boolean = true;
  characters: CharacterInterface[] = [] as CharacterInterface[];

  private characterService = inject(CharacterService);

  ngOnInit(): void {
    this.characterService
      .getCharacters()
      .subscribe((data: { items: CharacterInterface[] }) => {
        this.characters = data.items;
        this.isLoading = false;
      });
  }
}
