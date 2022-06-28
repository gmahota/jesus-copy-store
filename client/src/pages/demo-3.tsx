import {useRouter} from "next/router";
import {useEffect} from "react";
import {setConfig} from "slices/config";
import {useAppDispatch} from "store";

const Index: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(
      setConfig({
        layout: "layout-1",
        collapsed: true,
        rightSidebar: false,
        background: "light",
      })
    );
    window.scrollTo(0, 0);
    router.push("/");
  }, [dispatch, router]);
  return <></>;
};
export default Index;
