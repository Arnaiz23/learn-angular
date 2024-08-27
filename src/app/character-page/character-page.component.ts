import { Component, inject } from "@angular/core";
import { RouterLink, ActivatedRoute } from "@angular/router";

import { Character as CharacterInterface } from "../../types";
import { CharacterService } from "../character.service";

@Component({
  selector: "app-character-page",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./character-page.component.html",
  styleUrl: "./character-page.component.css",
})
export class CharacterPageComponent {
  character: CharacterInterface = {} as CharacterInterface;
  id: string | null = "";

  private characterService = inject(CharacterService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.characterService
      .getCharacter(this.id)
      .subscribe((data: CharacterInterface) => {
        this.character = data;
      });
  }
}
