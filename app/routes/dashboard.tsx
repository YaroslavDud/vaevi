import {authenticator} from "~/services/auth.server";
import {Form, Link} from "@remix-run/react";

export const loader = async ({ request }) => {
    return await authenticator.isAuthenticated(request, {
        failureRedirect: "/",
    })
};

export default function Dashboard() {
    return (
        <div>
            <h1>This is the home page.</h1>
            <Link to="/orders">Go to orders</Link>
            <Form action="/logout" method="post">
                <button>Logout</button>
            </Form>
        </div>
    );
}