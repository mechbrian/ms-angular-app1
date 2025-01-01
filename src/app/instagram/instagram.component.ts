import { Component, input, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [],
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.css',
})
export class InstagramComponent {
  // @Input() instagramUrl: string = '';
  @Input() description: string = '';
  completeUrl: string = '';
  sanitizedUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    console.log(
      'InstagramComponent initialized with description:',
      this.description
    );

    this.completeUrl =
      'https://www.instagram.com/mylesmscience/embed/?cr=1&amp;v=14&amp;wp=540&amp;rd=https%3A%2F%2Fwww.mylesmscience.com&amp;rp=%2Fabout-aesthetics#%7B%22ci%22%3A0%2C%22os%22%3A843.2999999523163%2C%22ls%22%3A435%2C%22le%22%3A735.7999999523163%7D';
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.completeUrl);
    console.log('completeUrl: ' + this.completeUrl);
  }
}
