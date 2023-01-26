import { Action, createReducer, on } from "@ngrx/store";
import * as OrganizationActions from "../actions/organization.actions";
import { initialState, State } from "../state/organization.state";

export const organizationFeatureKey = "organization";

export const reducer = createReducer(
  initialState,

  on(OrganizationActions.createOrganization, (state) => state),

  on(
    OrganizationActions.createOrganizationSuccess,
    (state, { organization }) => ({
      ...state,
      newOrganization: organization,
    })
  ),

  on(OrganizationActions.createOrganizationFailure, (state, action) => state),

  on(OrganizationActions.getOrganization, (state) => state),

  on(OrganizationActions.getOrganizationSuccess, (state, { organization }) => ({
    ...state,
    myOrganization: organization,
  })),
  on(OrganizationActions.checkAdminSuccess, (state, { boolean }) => ({
    ...state,
    isAdmin: boolean,
  }))
);

export const myOrganization = (state: State) => state.myOrganization;
export const isAdmin = (state: State) => state.isAdmin;
