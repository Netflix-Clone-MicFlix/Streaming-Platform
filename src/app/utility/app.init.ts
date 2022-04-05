import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) : () => Promise<boolean> {
    return () =>
        keycloak.init({
            config: {
                url: 'https://keycloak.krekels-server.com/auth',
                realm: 'Micflix',
                clientId: 'micflix-angular-client'
            },
            initOptions :{
                checkLoginIframe: true,
                checkLoginIframeInterval: 25
            }
        });
}