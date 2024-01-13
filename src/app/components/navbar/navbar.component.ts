import { Component, HostListener } from '@angular/core'
import { NgClass } from '@angular/common'

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [NgClass],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
	public scrolled: boolean = false
	public isCollapsed: boolean = true
	public isLargeScreen: boolean = window.innerWidth > 992

	@HostListener('window:scroll', [])
	onWindowScroll() {
		this.scrolled = window.scrollY > 50
	}
	toggleCollapse(): void {
		this.isCollapsed = !this.isCollapsed
	}
}
