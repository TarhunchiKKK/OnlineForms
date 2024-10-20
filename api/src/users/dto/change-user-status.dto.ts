import { UserStatuses } from "../enums/user-statuses.enum";

export class ChangeUserStatusDto {
    id: string;

    status: UserStatuses;
}
