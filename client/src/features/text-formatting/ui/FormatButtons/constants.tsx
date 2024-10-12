import { Editor } from "slate";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { toggleFontStyle, toggleFontWeight, toggleTextDecoration } from "../../helpers";

type TFormatButton = {
    element: JSX.Element;
    formatFunc: (editor: Editor) => void;
};

export const formatButtons: TFormatButton[] = [
    {
        element: <FaBold />,
        formatFunc: toggleFontWeight,
    },
    {
        element: <FaItalic />,
        formatFunc: toggleFontStyle,
    },
    {
        element: <FaUnderline />,
        formatFunc: toggleTextDecoration,
    },
];
