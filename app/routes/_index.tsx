import {Form} from "@remix-run/react";
import {SocialsProvider} from "remix-auth-socials";

export default function Index() {
  return (
      <>
          <Form
              method="post"
              action={`/auth/${SocialsProvider.GOOGLE}`}
          >
              <button>Login with Google</button>
          </Form>
          <Form
              method="post"
              action={`/auth/${SocialsProvider.MICROSOFT}`}
          >
              <button>Login with Microsoft</button>
          </Form>
      </>

  );
}
