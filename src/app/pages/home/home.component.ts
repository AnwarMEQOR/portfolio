import { Component } from '@angular/core'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	hobbies: { name: string; icon: string }[] = [
		{ name: 'Classical Music', icon: 'music-note-beamed' },
		{ name: 'Cooking', icon: 'basket3-fill' },
		{ name: 'Anime / Manga', icon: 'tv' },
		{ name: 'Gaming', icon: 'controller' },
		{ name: 'Photography', icon: 'camera' },
		{ name: 'Cultures', icon: 'backpack2' },
		{ name: 'Volunteering', icon: 'person-raised-hand' },
		{ name: 'Fitness', icon: 'heart-pulse' },
	]
}
