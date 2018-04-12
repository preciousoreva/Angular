import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // console.log(route.url);
    // get the current route id that that was passsed in and checks if it was a number

    let id: number;
    id = +route.url[1].path;

    if (isNaN(id) || id < 1) {
        alert('Invalid prodcut Id');
        this._router.navigate(['/products']);
        return false;
    }
    return true;
  }
}
