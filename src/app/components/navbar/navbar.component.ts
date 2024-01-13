import { Component, HostListener, OnDestroy, OnInit } from '@angular/core'
import { NgClass } from '@angular/common'

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [NgClass],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
	public scrolled: boolean = false
	public isCollapsed: boolean = true
	public isLargeScreen: boolean = window.innerWidth > 992

	ngOnInit() {
		this.updateIsLargeScreen()
		window.addEventListener('resize', this.updateIsLargeScreen)
	}

	ngOnDestroy() {
		window.removeEventListener('resize', this.updateIsLargeScreen)
	}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		this.scrolled = window.scrollY > 50
	}
	toggleCollapse(): void {
		this.isCollapsed = !this.isCollapsed
	}
	private updateIsLargeScreen = (): void => {
		this.isLargeScreen = window.innerWidth > 992
	}
}
