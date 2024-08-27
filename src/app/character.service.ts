import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Character as CharacterInterface } from "../types";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  private apiUrl = "https://dragonball-api.com/api";

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<{ items: CharacterInterface[] }> {
    return this.http.get<{ items: CharacterInterface[] }>(
      this.apiUrl + "/characters",
    );
  }

  getCharacter(id: string | null): Observable<CharacterInterface> {
    return this.http.get<CharacterInterface>(this.apiUrl + "/characters/" + id);
  }
}
