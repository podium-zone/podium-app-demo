import { NgModule } from '@angular/core';
import { CalendarModule } from './components/calendar/calendar.module';
import { ChatModule } from './components/chat/chat.module';
import { MembersModule } from './components/members/members.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  exports: [MembersModule, NavbarModule, CalendarModule, ChatModule, PipesModule],
})
export class SharedModule {}
