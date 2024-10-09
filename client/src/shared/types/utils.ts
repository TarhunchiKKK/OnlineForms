type THaveId = {
    id: number | string;
};

export type OmitId<Type extends THaveId> = Omit<Type, "id">;
