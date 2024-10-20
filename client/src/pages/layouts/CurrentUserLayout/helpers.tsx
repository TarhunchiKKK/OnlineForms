import { TUser } from "@/entities/users";

export const renderUserData = (user: TUser) => {
    return (
        <div className="flex flex-col justify-between items-start gap-3">
            <span>Username: {user.username ?? "-"}</span>
            <span>Email: {user.email}</span>
            <span>Status: {user.status}</span>
            <span>Role: {user.role}</span>
        </div>
    );
};
