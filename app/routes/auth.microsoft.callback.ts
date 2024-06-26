import {authenticator} from "~/services/auth.server";
import {SocialsProvider} from "remix-auth-socials";

export const loader = ({ request }) => {
    return authenticator.authenticate(SocialsProvider.MICROSOFT, request, {
        successRedirect: "/dashboard",
        failureRedirect: "/",
    });
};