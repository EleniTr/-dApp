import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromOrganization from "../reducers/organization.reducer";
import { State } from "../state/organization.state";

export const selectOrganizationState = createFeatureSelector<State>(
  fromOrganization.organizationFeatureKey
);

export const selectOrganizationDetails = createSelector(
  selectOrganizationState,
  fromOrganization.myOrganization
);

export const selectAdminStatus = createSelector(
  selectOrganizationState,
  fromOrganization.isAdmin
);
