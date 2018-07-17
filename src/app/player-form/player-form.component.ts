import { Component, OnInit } from '@angular/core';

import { Player } from '../player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {

    colors = ['Red', 'Blue', 'Purple', 'Black',
            'Green', 'Yellow'];
    races = ['Barony', 'Emirates', 'Sol', 'L1Z1X', 'Mentak', 'Naalu', 'Sardakk', 'Universities',
    'Xxcha', 'Yssaril', 'Muaat', 'Saar', 'Winnu', 'Arborec', 'Nekro', 'Ghosts', 'Yin' ];
    model = new Player('Red', 'Barony');
}
