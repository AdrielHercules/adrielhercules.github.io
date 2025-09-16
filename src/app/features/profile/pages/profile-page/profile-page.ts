import { Component } from '@angular/core';
import { ProjectsShowcase } from '../../components/projects-showcase/projects-showcase';
import { TopBar } from '../../components/top-bar/top-bar';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-profile-page',
  imports: [ProjectsShowcase, TopBar, Contact],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {}
