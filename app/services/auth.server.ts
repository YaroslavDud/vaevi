import { Authenticator } from "remix-auth";
import * as process from "process";
import { sessionStorage } from "~/services/session.server";
import {SocialsProvider, GoogleStrategy, MicrosoftStrategy} from "remix-auth-socials";

const URL = 'http://localhost:5173/auth'

export const authenticator = new Authenticator(sessionStorage);

async function handleSocialAuthCallback({ profile }) {
    return profile;
}

authenticator.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        scope: ['email'],
        callbackURL: `${URL}/${SocialsProvider.GOOGLE}/callback`,
    },
    handleSocialAuthCallback
));

authenticator.use(new MicrosoftStrategy({
        clientId: process.env.MICROSOFT_CLIENT_ID,
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
        redirectUri: `${URL}/${SocialsProvider.MICROSOFT}/callback`,
        scope: "openid profile",
        prompt: "login",
    },
    handleSocialAuthCallback
));