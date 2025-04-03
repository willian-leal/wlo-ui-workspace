import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { WloButtonComponent, WloTypographyComponent } from "wlo-ui";

@Component({
    standalone: true,
    selector: 'app-components',
    imports: [RouterLink, WloButtonComponent, WloTypographyComponent],
    templateUrl: './components.component.html',
    styleUrl: './components.component.scss',
}) export class ComponentsComponent {}