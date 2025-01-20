import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  optionsDevelopers = [
    {
      href: "#",
      svg: "assets/svgs/connectKit.svg",
      option: "ConnectKit",
      description: "Connecting a wallet, made simple."
    },
    {
      href: "#",
      svg: "assets/svgs/api.svg",
      option: "API",
      info: "Contact Sales",
      description: "Granular data, blazing fast speeds."
    }
  ];

  optionsResource = [
    {
      href: "#",
      option: "Blog"
    },
    {
      href: "#",
      option: "Changelog"
    },
    {
      href: "#",
      option: "Help & Support"
    },
    {
      href: "#",
      option: "FAQs"
    }
  ];

}