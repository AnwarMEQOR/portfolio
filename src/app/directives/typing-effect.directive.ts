import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
	selector: '[appTypingEffect]',
})
export class TypingEffectDirective implements OnInit {
	@Input('appTypingEffect') elements: string[] = []
	private element: HTMLElement
	private currentText = ''
	private deleting = false
	private currentIndex = 0
	private typeSpeed = 150
	private deleteSpeed = 75
	private pause = 500

	constructor(private el: ElementRef) {
		this.element = el.nativeElement
	}

	ngOnInit() {
		this.type()
	}

	private type() {
		const fullText = this.elements[this.currentIndex]

		if (this.deleting) {
			this.currentText = fullText.substring(0, this.currentText.length - 1)
		} else {
			this.currentText = fullText.substring(0, this.currentText.length + 1)
		}

		this.element.textContent = this.currentText

		let currentSpeed = this.deleting ? this.deleteSpeed : this.typeSpeed

		if (!this.deleting && this.currentText === fullText) {
			currentSpeed = this.pause
			this.deleting = true
		} else if (this.deleting && this.currentText === '') {
			this.deleting = false
			this.currentIndex++
			if (this.currentIndex >= this.elements.length) {
				this.currentIndex = 0
			}
			currentSpeed = this.typeSpeed
		}

		setTimeout(() => this.type(), currentSpeed)
	}
}
