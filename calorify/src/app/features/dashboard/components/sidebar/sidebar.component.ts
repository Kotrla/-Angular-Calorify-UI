import { filter } from 'rxjs';
import { SidebarItem } from '../../ts/dashboard.model';
import { NavigationEnd, Router } from '@angular/router';
import { RoutesEnum } from '../../../../core/ts/app.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService } from '../../../../core/services/auth.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@UntilDestroy()
@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
	SIDEBAR_ITEMS = [
		{ name: SidebarItem.HOME, image: '../../../assets/images/home.png' },
		{ name: SidebarItem.MEALS, image: '../../../assets/images/meals.png' },
		{ name: SidebarItem.WORKOUTS, image: '../../../assets/images/workouts.png' },
		{ name: SidebarItem.PROFILE, image: '../../../assets/images/profile.png' },
	];

	selectedSidebarItem: SidebarItem;

	constructor(private router: Router, private authService: AuthService, private cdRef: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.selectedSidebarItem = this.getSidebarItemFromUrl(this.router.url);

		this.watchRouteChanges();
	}

	onSidebarItem(sidebarItem: SidebarItem): void {
		this.selectedSidebarItem = sidebarItem;

		this.router.navigate([RoutesEnum.DASHBOARD + '/' + sidebarItem.toLowerCase()]);
	}

	onLogout(): void {
		this.authService.logout();
	}

	watchRouteChanges(): void {
		this.router.events
			.pipe(
				filter((event): event is NavigationEnd => event instanceof NavigationEnd),
				untilDestroyed(this)
			)
			.subscribe(({ url }) => {
				this.selectedSidebarItem = this.getSidebarItemFromUrl(url);

				this.cdRef.detectChanges();
			});
	}

	getSidebarItemFromUrl(url: string): SidebarItem {
		const itemFromUrl = url.split('/')[2];

		return (itemFromUrl.charAt(0).toUpperCase() + itemFromUrl.slice(1)) as SidebarItem;
	}
}
