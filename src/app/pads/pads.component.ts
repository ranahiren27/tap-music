import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-pads',
  templateUrl: './pads.component.html',
  styleUrls: ['./pads.component.css']
})
export class PadsComponent implements OnInit {
  colors: Array<string> = [
    '#60d394',
    '#d36060',
    '#c060d3',
    '#d3d160',
    '#606bd3',
    '#60c2d3'
  ];

  constructor() {
  }
  ngOnInit() {

  }

  playSound(sound){
    const audio: HTMLAudioElement = new Audio();
    audio.src = sound;
    audio.play();
    this.createBubble(Math.floor(Math.random() * this.colors.length));
  }

  createBubble(index) {
    const bubble = document.createElement('div');
    const visual = document.querySelector('.visual');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = this.colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
    });
  }
}
