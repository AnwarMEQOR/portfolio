import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
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
	counters: { name: string; icon: string; finalCount: number; count: number }[] = [
		{ name: 'Happy Clients', icon: 'emoji-laughing', finalCount: 13, count: 0 },
		{ name: 'Projects Completed', icon: 'briefcase', finalCount: 19, count: 0 },
		{ name: 'Articles Published', icon: 'file-earmark-richtext', finalCount: 3, count: 0 },
		{ name: 'Years in the Field', icon: 'calendar2-range', finalCount: 4, count: 0 },
	]
	services: { title: string; icon: string; text: string }[] = [
		{
			title: 'Web Application Development',
			icon: 'code-slash',
			text: 'Crafting dynamic, responsive, and intuitive web applications using modern technologies and frameworks to meet your unique business needs.',
		},
		{
			title: 'API Development & Integration',
			icon: 'plug-fill',
			text: 'Designing robust and scalable APIs, and integrating third-party services to enhance the functionality and performance of your applications.',
		},
		{
			title: 'Database Design & Management',
			icon: 'server',
			text: 'Offering comprehensive database solutions, including design, development, optimization, and management to ensure data integrity and performance.',
		},
		{
			title: 'Cloud Services & Deployment',
			icon: 'cloud-arrow-up-fill',
			text: 'Leveraging cloud technologies to deploy, manage, and scale applications efficiently, ensuring high availability and cost-effectiveness.',
		},
		{
			title: 'SEO Optimization & Analysis',
			icon: 'graph-up-arrow',
			text: "Enhancing your website's visibility and ranking on search engines through SEO optimization and analysis. Implementing best practices to drive organic traffic.",
		},
		{
			title: 'Cybersecurity & Data Protection',
			icon: 'shield-lock-fill',
			text: 'Prioritizing the security of your digital assets with comprehensive cybersecurity solutions. Implementing robust security protocols and ensuring data protection',
		},
	]
	@ViewChild('counter') counterElement: ElementRef | undefined
	hasAnimatedCounter = false // To ensure the counter animation only runs once
	ngOnInit() {
		this.checkCounterInView()
	}
	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		// On window scroll, check if the counter is in view
		this.checkCounterInView()
	}
	checkCounterInView() {
		if (
			!this.hasAnimatedCounter &&
			this.counterElement &&
			this.isElementInView(this.counterElement.nativeElement)
		) {
			this.animateCount(0, this.counters[0].finalCount, 2000)
			this.animateCount(1, this.counters[1].finalCount, 2000)
			this.animateCount(2, this.counters[2].finalCount, 2000)
			this.animateCount(3, this.counters[3].finalCount, 2000)
			this.hasAnimatedCounter = true
		}
	}
	isElementInView(element: HTMLElement) {
		const rect = element.getBoundingClientRect()
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		)
	}
	animateCount(id: number, endCount: number, duration: number) {
		const stepTime = duration / endCount
		let currentStep = 0
		const interval = setInterval(() => {
			currentStep++
			this.counters[id].count = currentStep
			if (currentStep === endCount) {
				clearInterval(interval)
			}
		}, stepTime)
	}
}
