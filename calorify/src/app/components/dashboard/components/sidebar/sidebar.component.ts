import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../../ts/enums/sidebar-item.enum';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    SIDEBAR_ITEMS = [
        { name: SidebarItem.HOME, image: '../../../assets/images/home.png' },
        { name: SidebarItem.MEALS, image: '../../../assets/images/meals.png' },
        { name: SidebarItem.WORKOUTS, image: '../../../assets/images/workouts.png' },
        { name: SidebarItem.PROFILE, image: '../../../assets/images/profile.png' },
    ]
  
    selectedSidebarItem: SidebarItem;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.selectedSidebarItem = SidebarItem.HOME;
    }

    onSidebarItem(sidebarItem: SidebarItem): void {
        this.selectedSidebarItem = sidebarItem;
    }

    onLogout(): void {
        this.authService.logout();
    }
}
