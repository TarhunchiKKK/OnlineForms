import { iconsSize } from "@/entities/questions/ui/QuestionFooter/constants";
import { useLikeButton } from "./useLikeButton";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useIntl } from "react-intl";

export function LikeTemplateButton() {
    const { isLiked, handleLike } = useLikeButton();

    const intl = useIntl();

    return (
        <button
            title={intl.formatMessage({ id: "like_template" })}
            onClick={handleLike}
            className="p-2 bg-white dark:bg-black rounded-full shadow-md"
        >
            {isLiked ? <FcLike size={iconsSize} /> : <FcLikePlaceholder size={iconsSize} />}
        </button>
    );
}
