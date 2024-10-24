import { iconsSize } from "@/entities/questions/ui/QuestionFooter/constants";
import { useLikeButton } from "./useLikeButton";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

export function LikeTemplateButton() {
    const { isLiked, handleLike } = useLikeButton();

    return (
        <button
            title="Add question"
            onClick={handleLike}
            className="p-2 bg-white dark:bg-black rounded-full shadow-md"
        >
            {isLiked ? <FcLike size={iconsSize} /> : <FcLikePlaceholder size={iconsSize} />}
        </button>
    );
}
