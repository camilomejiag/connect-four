import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './components/shared/shared.module';
import {GameModalComponent} from './components/sections/board/game-modal/game-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GameModalComponent
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [GameModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
