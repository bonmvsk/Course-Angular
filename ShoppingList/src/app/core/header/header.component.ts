import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(
        private dataStorageService: DataStorageService,
        public authService: AuthService) { }

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
            (response: Response) => {
                console.log(response);
            });
    }

    onLogout(){
        this.authService.logout();
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

}
