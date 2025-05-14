import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor, MatButton, MatIconButton} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbar,
    MatButton,
    NgOptimizedImage,
    MatIcon,
    MatAnchor,
    RouterLink,
    MatIconButton,
    MatMenuTrigger,
    MatMenu,
    MatDivider,
    MatMenuItem
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
