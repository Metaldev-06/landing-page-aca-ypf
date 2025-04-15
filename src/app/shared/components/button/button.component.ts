import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonComponent {
  public isButton = input.required<boolean>();
  public label = input.required<string>();
  public path = input<string>('');
  public isPrimary = input.required<boolean>();
}
