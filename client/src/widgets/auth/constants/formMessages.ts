import { AuthOperations } from "../types";

export const formMessages: Record<AuthOperations, string> = {
    [AuthOperations.SignIn]: "Don't have an account?",
    [AuthOperations.SignUp]: "Already have an account?",
};
