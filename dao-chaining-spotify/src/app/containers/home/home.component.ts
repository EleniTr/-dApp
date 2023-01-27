import { Component, OnInit, OnDestroy } from "@angular/core";
import { ContractService } from "../../services/contract.service";
import { Store, select } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import * as fromRoot from "../../reducers/index";
import * as fromUser from "../../selectors/user.selectors";
import { selectSongIdList } from "../../selectors/song-list.selector";
import * as fromOrganization from "../../selectors/organization.selectors";
import { takeUntil, tap } from "rxjs/operators";
import { connectUser } from "../../actions/user.actions";
import { SongListComponent } from "../../components/song-list/song-list.component";
import { track } from "../../models/track";
import { TRACKS } from "../../components/song-list/tracks";
import {
  createOrganization,
  getOrganization,
  donate,
  checkAdmin,
} from "../../actions/organization.actions";
import { first } from "rxjs/operators";
import { User } from "../../models/users";
import { UserService } from "../../services/user.services";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [ContractService, SongListComponent],
})
export class HomeComponent implements OnInit, OnDestroy {
  account$: Observable<any>;
  display$: Observable<any>;
  isAdmin$: Observable<any>;
  songList$: Observable<any>;
  selectedOrganization$: Observable<any>;
  wallet$: Observable<any>;
  unsubscribe$: Subject<any> = new Subject<any>();

  loading = false;
  users: User[];
  songSelected: track;

  connected;
  organizationDetails;
  isAdmin;
  addedtoCart;
  songId: number;

  constructor(
    private store$: Store<fromRoot.State>,
    private contractService: ContractService,
    private userService: UserService,
    private songListAddtoCart: SongListComponent
  ) {
    this.display$ = this.store$.pipe(select(fromUser.selectConnectionStatus));
    this.selectedOrganization$ = this.store$.pipe(
      select(fromOrganization.selectOrganizationDetails)
    );
    this.isAdmin$ = this.store$.pipe(
      select(fromOrganization.selectAdminStatus)
    );
    this.songList$ = this.store$.pipe(select(selectSongIdList));
  }

  ngOnInit(): void {
    // login
    this.loading = true;
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.loading = false;
        this.users = users;
      });

    this.display$.pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
      this.connected = res;
    });
    this.selectedOrganization$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.organizationDetails = data;
      });
    this.isAdmin$.pipe(takeUntil(this.unsubscribe$)).subscribe((boolean) => {
      this.isAdmin = boolean;
    });
    this.songList$.pipe(takeUntil(this.unsubscribe$)).subscribe((id) => {
      this.songId = id;
    });
    this.songSelected = TRACKS.find((x) => x.id == this.songId);
  }

  onConnect() {
    this.store$.dispatch(connectUser());
  }

  onCreate(form) {
    const org = {
      orgID: form.id,
      payableWallet: form.walletAddress,
      orgName: form.name,
      tokenAddress: form.tokenAddress,
    };

    this.store$.dispatch(createOrganization({ organization: org }));
  }

  onGet(form) {
    const orgID = form.id;
    this.store$.dispatch(getOrganization({ id: orgID }));
    this.store$.dispatch(checkAdmin({ id: orgID }));
  }

  onDonate(form) {
    this.store$.dispatch(
      donate({ id: form.id, amount: form.amount, tip: form.tip })
    );
  }

  onPause(data) {
    console.log(data);
    // TODO move to ngrx effect?
    this.contractService.pauseOrganization(data.id, data.causeIds);
  }

  onUnpause(data) {
    console.log(data);
    // TODO move to ngrx effect?
    this.contractService.unpauseOrganization(data.id, data.causeIds);
  }

  onAdd(data) {
    console.log(data);
    // incorporate uDonate isAdmin function?
    // TODO move to ngrx effect?
    this.contractService.addNewOrganizationAdmin(data.address, data.id);
  }

  onRemove(data) {
    console.log(data);
    // incorporate uDonate isAdmin function?
    // TODO move to ngrx effect?
    this.contractService.removeOrganizationAdmin(data.address, data.id);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
