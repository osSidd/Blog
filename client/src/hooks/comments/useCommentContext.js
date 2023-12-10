import { useContext } from "react";
import { CommentContext } from "../../context/commentContext";

export default function useCommentContext(){
    const {comments, dispatch} = useContext(CommentContext)
    return {
        comments,
        dispatch,
    }
}