import { Injectable } from '@angular/core';
import { CoreModule } from './core/core.module';
import { UserManager, User } from 'oidc-client';
import { Constants } from './constants';

@Injectable({providedIn: CoreModule})
export class ServiceNameService {
    private _userManager: UserManager;
    private _user: User;

    constructor() {
        const stsSettings = {
            authority: Constants.stsAuthority,
            client_id: Constants.clientId,
            redirect-uri: `${Constants.clientRoot}signing-callback`,
            scope: 'openid profile projects-api',
            response_type: 'code',
            post_logout_redirect_uri: `${Constants.clientRoot}signout-callback`
        };
        this._userManager = new UserManager(stsSettings);
    }
    
}