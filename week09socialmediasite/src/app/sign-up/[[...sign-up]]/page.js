import { SignUp } from "@clerk/nextjs";
export default function SignUpPage() {
  return (
    <>
      <h1>Please, sign up for an account</h1>
      <SignUp />
    </>
  );
}
