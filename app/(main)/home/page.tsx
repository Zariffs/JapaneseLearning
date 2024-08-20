import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const home = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress activeCourse={{title: "Japanese", imageSrc: "./JP.svg"}} points={100} hearts={5} />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Japanese"/>
            </FeedWrapper>
        </div>
    );
};

export default home;