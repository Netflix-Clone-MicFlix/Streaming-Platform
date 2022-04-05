import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) : () => Promise<boolean> {
    return () =>
        keycloak.init({
            config: {
                url: 'https://keycloak.krekels-server.com/auth',
                realm: 'micflix',
                clientId: 'micflix-angular-client'
            },
            loadUserProfileAtStartUp: true,
            initOptions :{
                onLoad: 'check-sso',
                checkLoginIframe: false,
                checkLoginIframeInterval: 25
            }
        });
}