import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <>
      <h1>Please, sign into your account</h1>
      <SignIn />
    </>
  );
}

//Make sure the user sees this page first, before they can complete their own profile page.
//The reason is, when the user creates a profile here, clerk assigns them a userId