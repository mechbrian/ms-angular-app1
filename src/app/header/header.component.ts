import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  loading: boolean = false;

  constructor(private viewpostScroller: ViewportScroller) {}

  scrollToFooter(): void {
    this.viewpostScroller.scrollToAnchor('footer');
  }

  openByDocument() {
    const modal = document.getElementById('exampleModal');
    if (modal != null) {
      modal.style.display = 'block';
      console.log('Modal is not null');
    } else {
      console.log('Modal is null');
    }
  }

  closeByDocument() {
    const modal = document.getElementById('exampleModal');
    if (modal != null) {
      modal.style.display = 'none';
      console.log('Modal is closing');
    } else {
      console.log('Modal is null in closeByDocument');
    }
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    this.loading = true;

    // my test setting
    // emailjs
    //   .sendForm(
    //     'service_nfhfu2f',
    //     'template_n4ftd04',
    //     e.target as HTMLFormElement,
    //     { publicKey: '5Ordmgy2UVNZZlcDi' }
    //   )
    //   .then(
    //     (result: EmailJSResponseStatus) => {
    //       console.log('SUCCESS!', result.text);
    //       alert('Your message has been sent successfully!');
    //       this.loading = false;
    //       this.closeByDocument();
    //       (e.target as HTMLFormElement).reset(); // Optionally reset the form
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //       alert('Failed to send your message. Please try again.');
    //       this.loading = false;
    //     }
    //   );

    // Myles setting
    emailjs
      .sendForm(
        'msciencesales@gmail.com',
        'template_5rf5nqr',
        e.target as HTMLFormElement,
        { publicKey: '1LX--ztrOQJ49Ec-A' }
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('SUCCESS!', result.text);
          alert('Your message has been sent successfully!');
          this.loading = false;
          this.closeByDocument();
          (e.target as HTMLFormElement).reset(); // Optionally reset the form
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send your message. Please try again.');
          this.loading = false;
        }
      );
  }
}
