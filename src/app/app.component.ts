
import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TranslateModule,CommonModule] 
})
export class AppComponent {
  title = 'twin-travel';
  showVideo: boolean = false;
  toggleVideo() {
    this.showVideo = !this.showVideo;
  }
  hideVideo() {
    this.showVideo = false; 
  }
  constructor(private translate: TranslateService) {
    // Добавляем языки и устанавливаем язык по умолчанию
    this.translate.addLangs(['en', 'ru', 'kk']);
    this.translate.setDefaultLang('en');
  }

  switchLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.translate.use(lang);
  }

}

