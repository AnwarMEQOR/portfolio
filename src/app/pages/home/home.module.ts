import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { TypingEffectDirective } from '../../directives/typing-effect.directive'

@NgModule({
	declarations: [HomeComponent, TypingEffectDirective],
	imports: [CommonModule, HomeRoutingModule, NgOptimizedImage],
})
export class HomeModule {}
