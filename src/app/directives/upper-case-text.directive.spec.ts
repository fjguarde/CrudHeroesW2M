import { ElementRef, Renderer2 } from '@angular/core'
import { UpperCaseTextDirective } from './upper-case-text.directive'

describe('UpperCaseTextDirective', () => {
  let el: ElementRef
  let renderer: Renderer2

  it('should create an instance', () => {
    const directive = new UpperCaseTextDirective(el, renderer)
    expect(directive).toBeTruthy()
  })
})
