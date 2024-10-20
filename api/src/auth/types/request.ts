import { TUserProfile } from "./user-profile.type";
import { TRequest } from "src/shared/types/request";

export type TAuthorizedRequest = TRequest & {
    user: TUserProfile;
};
