export class UserPermissionsChangeEvent {
    public static EventName = "user.permissions.changed";

    public userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }
}
