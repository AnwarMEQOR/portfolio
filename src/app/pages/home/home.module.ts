import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { HeroComponent } from './components/hero/hero.component'
import { TypingEffectDirective } from '../../directives/typing-effect.directive'

@NgModule({
	declarations: [HomeComponent, HeroComponent, TypingEffectDirective],
	imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
