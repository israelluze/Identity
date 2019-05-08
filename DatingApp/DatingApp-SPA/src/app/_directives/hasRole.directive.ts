import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[];
  isVisible = false;

  constructor(private viewContainerRef: ViewContainerRef, 
              private templateref: TemplateRef<any>,
              private authService: AuthService) { }

  ngOnInit() {
    const userroles = this.authService.decodedToken.role as Array<string>;
    //if no roles clear the viewContainerRef
    if (!userroles) {
      this.viewContainerRef.clear();
    }
    //if user has role need then render the element
    if (this.authService.roleMatch(this.appHasRole)) {
      if (!this.isVisible) {
        this.isVisible = true;
        this.viewContainerRef.createEmbeddedView(this.templateref);        
      } else {
        this.isVisible = false;
        this.viewContainerRef.clear();
      }
    }
  }

}
