import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { BlackJackGame } from '../types/BlackJackGame';
import { CardService } from './card.service';
import { Card } from '../types/Card';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly createGameUrl = environment.serviceUrl + environment.createGameEndpoint;

  private readonly username = 'DoomSlayer';

  public createNewGame(): Observable<BlackJackGame> {
    let o = new Observable<BlackJackGame>(
      (observer) => {
        let c1 = this.getNewCard();
        let c2 = this.getNewCard();
        let pScore = c1.getValue() + c2.getValue();
        observer.next(
          {
            player: {
              hand: [
                c1,
                c2
              ],
              name: `test-player`,
              score: pScore,
              tokens: 0
            },
            dealer: {
              name: `test-dealer `,
              shownCard: this.getNewCard()
            }
          });
          observer.complete();
      });

      return o;

    /* return this.http.post<BlackJackGame>(this.createGameUrl,
      '',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }); */
  }

  private getNewCard(): Card {
    let c = new Card();
    c.setSuit(this.cardService.getRandomSuit());
    c.setValue(this.cardService.getRandomCardValue());
    return c;
  }

  constructor(private http: HttpClient, private cardService: CardService) { }
}
