import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public activeLang = 'es';

  constructor(
    private translate: TranslateService
  ) {
    this.translate.use(this.activeLang);
  }
  ngOnInit() {
  }
  public changeLang(lang: string) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
