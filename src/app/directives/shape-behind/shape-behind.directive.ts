/* eslint-disable max-statements */
import type { OnDestroy, OnInit } from '@angular/core';
import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShapeBehind]',
  standalone: true,
})
export class ShapeBehindDirective implements OnInit, OnDestroy {
  private readonly _color: string = 'var(--mdc-checkbox-selected-pressed-icon-color)';
  private _resizeObserver!: ResizeObserver;

  private readonly _render = inject(Renderer2);
  private readonly _elementRef = inject(ElementRef);

  public ngOnInit(): void {
    this._resizeObserver = new ResizeObserver(() => {
      const hostElement = this._elementRef.nativeElement as HTMLElement;

      // Getting all svg elements that may exist
      const svgElements = hostElement.querySelectorAll('svg');

      // Deleting all svg elements that may exist
      svgElements.forEach(svgElement => {
        this._render.removeChild(hostElement, svgElement);
      });
      // Setting the host element to relative position
      this._render.setStyle(hostElement, 'position', 'relative');

      // Creating the svg element
      const svg = this._render.createElement('svg', 'svg') as SVGElement;

      // Getting the host element dimensions
      const hostRect = hostElement.getBoundingClientRect() as DOMRect;

      // Setting the svg element attributes
      this._render.setAttribute(svg, 'width', '163');
      this._render.setAttribute(svg, 'height', '14');
      this._render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
      this._render.setAttribute(svg, 'preserveAspectRatio', 'none');

      // Calculating the scale factor
      const scalex = hostRect.width / 163;

      // Setting the svg element attributes
      const viewBox = `0 0 163 14`;
      this._render.setAttribute(svg, 'viewBox', viewBox);
      this._render.setAttribute(svg, 'fill', 'none');

      // Creating the path element
      const p1 = this._render.createElement('path', 'svg') as SVGPathElement;

      // Setting the path element attributes
      this._render.setAttribute(p1, 'd', 'M-6.10352e-05 0H199.877L199.882 9H1.88236L-6.10352e-05 0Z');
      this._render.setAttribute(p1, 'fill', this._color);

      // Appending the path element to the svg element
      this._render.appendChild(svg, p1);

      // Appending the svg element to the host element and making it absolute
      this._render.setStyle(svg, 'position', 'absolute');
      this._render.setStyle(svg, 'bottom', '-12px');

      // Setting the host element z-index to 10 and the svg element z-index to -1
      hostElement.style.zIndex = '10';
      svg.style.zIndex = '-1';
      svg.style.transformOrigin = 'left';

      // Setting the svg element scale factor
      svg.style.transform = `scaleX(${scalex})`;

      // Appending the svg element to the host element
      this._render.appendChild(this._elementRef.nativeElement, svg);
    });

    this._resizeObserver.observe(document.body);
  }

  public ngOnDestroy(): void {
    this._resizeObserver.disconnect();
  }
}
