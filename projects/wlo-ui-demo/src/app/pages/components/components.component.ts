import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { WloButtonComponent, WloTypographyComponent } from "wlo-ui";

@Component({
    standalone: true,
    selector: 'app-components',
    imports: [RouterLink, WloButtonComponent, WloTypographyComponent, CommonModule, TranslateModule],
    templateUrl: './components.component.html',
    styleUrl: './components.component.scss',
}) export class ComponentsComponent {}