import { KeycloakService } from "keycloak-angular";
import { environment } from "../environments/services.environment";

export function initializeKeycloak(keycloak: KeycloakService) : () => Promise<boolean> {
    return () =>
        keycloak.init({
            config: {
                url: environment.keycloakUrl,
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