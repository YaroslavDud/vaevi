import {authenticator} from "~/services/auth.server";

export const loader = async ({ request }) => {
    return await authenticator.isAuthenticated(request, {
        failureRedirect: "/",
    })
};

export default function Orders() {
    return <h1>This is the order page.</h1>
}