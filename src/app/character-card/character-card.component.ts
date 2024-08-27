import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-character-card",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./character-card.component.html",
  styleUrl: "./character-card.component.css",
})
export class CharacterCardComponent {
  @Input() name: string = "Character";
  @Input() image: string = "";
  @Input() id: number = 0;
}
