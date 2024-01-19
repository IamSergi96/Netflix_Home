import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmsArray } from './interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, HeroComponent, FilmsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netflix-app';
  accion:FilmsArray[]=[
    {
    section: "Acción",
    films:[
      {
      title: "Ejercito de los Muertos", 
      image: "assets/images/Accion/ejercitomuertos.jpg"
      },
      {
        title: "El protector", 
        image: "assets/images/Accion/elprotector.webp"
      },
      {
        title: "Equalizer 2", 
        image: "assets/images/Accion/equalizer2.webp"
      },
      {
        title: "Heat", 
        image: "assets/images/Accion/heat.webp"
      },
      {
        title: "Jack Reacher", 
        image: "assets/images/Accion/jackreacher.webp"
      },
      {
        title: "John Wick 2", 
        image: "assets/images/Accion/johnwick2.webp"
      },
      {
        title: "Kill Bill Vol. 2", 
        image: "assets/images/Accion/killbill2.webp"
      },
      {
        title: "MI: Nación Secreta", 
        image: "assets/images/Accion/misionimposiblenacion.webp"
      },
      {
        title: "El Renacido", 
        image: "assets/images/Accion/renacido.webp"
      },
      {
        title: "Terminator 2", 
        image: "assets/images/Accion/terminator2.webp"
      },
      {
        title: "World War Z", 
        image: "assets/images/Accion/worldwarz.webp"
      },
    ],
    }
  ]
  terror:FilmsArray[]=[
  {
  section: "Terror",
  films:[
    {
    title: "Apostol", 
    image: "assets/images/Terror/apostol.jpg"
    },
    {
      title: "Calle del Terror", 
      image: "assets/images/Terror/calleterror.jpg"
    },
    {
      title: "Infierno bajo el Agua", 
      image: "assets/images/Terror/infiernoagua.webp"
    },
    {
      title: "Insidious 2", 
      image: "assets/images/Terror/insidious2.webp"
    },
    {
      title: "Life", 
      image: "assets/images/Terror/life.webp"
    },
    {
      title: "Malasana", 
      image: "assets/images/Terror/malasana.webp"
    },
    {
      title: "Múltiple", 
      image: "assets/images/Terror/multiple.webp"
    },
    {
      title: "Reflejos", 
      image: "assets/images/Terror/reflejos.webp"
    }
  ],
  }
]
drama:FilmsArray[]=[
  {
  section: "Drama",
  films:[
    {
    title: "1917", 
    image: "assets/images/Drama/1917.webp"
    },
    {
      title: "Arrival", 
      image: "assets/images/Drama/arrival.webp"
    },
    {
      title: "El club de la lucha", 
      image: "assets/images/Drama/clublucha.webp"
    },
    {
      title: "Corazones", 
      image: "assets/images/Drama/corazones.webp"
    },
    {
      title: "Culpable", 
      image: "assets/images/Drama/culpable.jpg"
    },
    {
      title: "La milla verde", 
      image: "assets/images/Drama/millaverde.webp"
    },
    {
      title: "Náufrago", 
      image: "assets/images/Drama/naufrago.webp"
    },
    {
      title: "No es país para viejos", 
      image: "assets/images/Drama/noespais.webp"
    },
    {
      title: "Salvar al soldado Ryan", 
      image: "assets/images/Drama/salvaralsoldado.webp"
    },
    {
      title: "El precio del poder", 
      image: "assets/images/Drama/scarface.webp"
    },
    {
      title: "La lista Schindler", 
      image: "assets/images/Drama/schindler.webp"
    },
  ],
  }
]
sciFi:FilmsArray[]=[
  {
  section: "Sci-fi",
  films:[
    {
    title: "El Sexto Dia", 
    image: "assets/images/Sci-fi/6dia.webp"
    },
    {
      title: "12 monos", 
      image: "assets/images/Sci-fi/12monos.webp"
    },
    {
      title: "After Earth", 
      image: "assets/images/Sci-fi/afterearth.webp"
    },
    {
      title: "The Cloverfield Paradox", 
      image: "assets/images/Sci-fi/colverparadox.jpg"
    },
    {
      title: "El núcleo", 
      image: "assets/images/Sci-fi/core.webp"
    },
    {
      title: "Deep Impact", 
      image: "assets/images/Sci-fi/deepimpact.webp"
    },
    {
      title: "Doom", 
      image: "assets/images/Sci-fi/doom.webp"
    },
    {
      title: "Jumper", 
      image: "assets/images/Sci-fi/jumper.webp"
    },
    {
      title: "Passengers", 
      image: "assets/images/Sci-fi/passengers.webp"
    },
    {
      title: "Star Trek", 
      image: "assets/images/Sci-fi/startrek.webp"
    },
    {
      title: "Transformers", 
      image: "assets/images/Sci-fi/transformers.webp"
    },
  ],
  }
]
anime:FilmsArray[]=[
  {
  section: "Anime",
  films:[
    {
    title: "Ajin", 
    image: "assets/images/Anime/ajin.jpg"
    },
    {
      title: "Castillo Ambulante", 
      image: "assets/images/Anime/castilloambulante.webp"
    },
    {
      title: "Chihiro", 
      image: "assets/images/Anime/chihiro.webp"
    },
    {
      title: "Evangelion", 
      image: "assets/images/Anime/evangelion.webp"
    },
    {
      title: "GITS Arise", 
      image: "assets/images/Anime/gitsarise.webp"
    },
    {
      title: "Gundam", 
      image: "assets/images/Anime/gundam.webp"
    },
    {
      title: "El castillo en el cielo", 
      image: "assets/images/Anime/laputa.webp"
    },
    {
      title: "Mononoke", 
      image: "assets/images/Anime/mononoke.webp"
    },
    {
      title: "ninokuni", 
      image: "assets/images/Anime/ninokuni.jpg"
    },
    {
      title: "Perfect Blue", 
      image: "assets/images/Anime/perfectblue.webp"
    },
  ],
  }
]
topTen:FilmsArray[]=[
  {
  section: "Top 10",
  films:[
    {
    title: "La casa de Papel", 
    image: "assets/images/Top10/1-papel.webp"
    },
    {
      title: "La reina del flow", 
      image: "assets/images/Top10/2-reina.webp"
    },
    {
      title: "Titanes", 
      image: "assets/images/Top10/3-titanes.webp"
    },
    {
      title: "Lost in Space", 
      image: "assets/images/Top10/4-lostinspace.webp"
    },
    {
      title: "Donde caben dos", 
      image: "assets/images/Top10/5-dondecaben.webp"
    },
    {
      title: "Aqui no hay quien viva", 
      image: "assets/images/Top10/6-aquinohay.webp"
    },
    {
      title: "Black List", 
      image: "assets/images/Top10/7-blacklist.webp"
    },
    {
      title: "Ricos y mimados", 
      image: "assets/images/Top10/8-ricos.webp"
    },
    {
      title: "El poder del perro", 
      image: "assets/images/Top10/9-poder.webp"
    },
    {
      title: "The Good Doctor", 
      image: "assets/images/Top10/10-gooddoctor.webp"
    }
  ],
  }
]
}
