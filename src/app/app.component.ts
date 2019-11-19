import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: "Premier Post",
      content: "lorem PostListItemComponent auront des boutons qui permettent d'augmenter et de " +
        "diminuer le nombre de loveIts — cette modification aura uniquement un e" +
        "ffet sur le component, et n'a pas",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Deuxiemme Post",
      content: "lorem PostListItemComponent auront des boutons qui permettent d'augmenter et de " +
        "diminuer le nombre de loveIts — cette modification aura uniquement un e" +
        "ffet sur le component, et n'a pas",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Troisiemme Post",
      content: "lorem PostListItemComponent auront des boutons qui permettent d'augmenter et de " +
        "diminuer le nombre de loveIts — cette modification aura uniquement un e" +
        "ffet sur le component, et n'a pas",
      loveIts: 0,
      created_at: new Date()
    }
  ];
  constructor(){
  }

}
