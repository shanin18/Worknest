import { useEffect } from "react";
const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | WorkNest`;
  }, [title]);
};

export default useTitle;
