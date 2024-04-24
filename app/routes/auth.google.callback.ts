import { SocialsProvider } from "remix-auth-socials";
import {authenticator} from "~/services/auth.server";

export const loader = ({ request }) => {
    return authenticator.authenticate(SocialsProvider.GOOGLE, request, {
        successRedirect: "/dashboard",
        failureRedirect: "/",
    });
};